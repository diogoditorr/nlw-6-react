import React, { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import deleteImg from '../assets/images/delete.svg';
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";
import { useAuth } from "../hooks/useAuth";
import { useRoom } from "../hooks/useRoom";
import { database } from "../services/firebase";

import "../styles/room.scss";

type RoomsParams = {
    id: string;
};

export function AdminRoom() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const params = useParams<RoomsParams>();
    const roomId = params.id || "";
    
    const { questions, title } = useRoom(roomId);

    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date(),
        })

        navigate('/');
    }

    async function handleDeleteQuestion(questionId: string) {
        // TODO: Implement delete question with "react-modal" package
        if (window.confirm('Tem certeza que você deseja excluir esta pergunta?'))
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutlined onClick={handleEndRoom}>Encerrar Sala</Button>
                    </div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>{title}</h1>
                    {questions.length > 0 && (
                        <span>
                            {questions.length} pergunta
                            {questions.length > 1 ? "s" : ""}
                        </span>
                    )}
                </div>

                <div className="question-list">
                    {questions.map((question) => {
                        return (
                            <Question 
                                key={question.id}
                                content={question.content}
                                author={question.author}
                            >
                                <button
                                    type="button"
                                    onClick={() => handleDeleteQuestion(question.id)}
                                >
                                    <img src={deleteImg} alt="Remover pergunta" />
                                </button>    
                            </Question>
                        )
                    })}
                </div>
            </main>
        </div>
    );
}
