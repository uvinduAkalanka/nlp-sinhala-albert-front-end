import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TextInput.css';
import { Modal, Button } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';

const TextInput = ({ setResult }) => {
    const [text, setText] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleAnalyze = async () => {
        if (text.trim() === '') {
            setShowModal(true);
            return;
        }
        try {
            const response = await axios.get(`http://127.0.0.1:5000/analyze?text=${encodeURIComponent(text)}`);
            setResult(response.data);
        } catch (error) {
            console.error(error);
            setResult({ error: error.message });
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='textInput'>
            <TextareaAutosize
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text here..."
                className="textAreaInput"
            />
            <button onClick={handleAnalyze}>Analyze Sentiment</button>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Input Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please enter some Sinhala text to analyze.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default TextInput;