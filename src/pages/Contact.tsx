import { useState } from 'react';
import { PageContainer } from "@ styles/ContactStyle/PageContainer.tsx"
import {ContactForm} from "@ styles/ContactStyle/ContactForm.tsx";
import {Title} from "@ styles/ContactStyle/ContactForm.tsx";
import {Label} from "@ styles/ContactStyle/Label.tsx";
import {Input} from "@ styles/ContactStyle/Input.tsx";
import {Textarea} from "@ styles/ContactStyle/TextArea.tsx";
import {Button} from "@ styles/ContactStyle/Button.tsx";
import {ErrorMessage} from "@ styles/ContactStyle/ErrorMessage.tsx";
import {SuccessMessage} from "@ styles/ContactStyle/SuccessMessage.tsx";
import { motion } from 'framer-motion';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const validEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({});
    };

    const handleSubmit = (e: React.FormEvent) => {
        setIsSubmitted(false);
        e.preventDefault();
        const newErrors: { name?: string; email?: string; message?: string } = {};

        if (!formData.name) newErrors.name = 'Заполните поле "Имя"';
        if (!formData.email) newErrors.email = 'Заполните поле "Email"';
        else if (!validEmail(formData.email)) newErrors.email = 'Некорректный email';
        if (!formData.message) newErrors.message = 'Заполните поле "Сообщение"';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Отправленные данные:', formData);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <PageContainer>
            <motion.div
                initial={{rotate: -90, opacity: 0}}
                animate={{rotate: 0, opacity: 1}}
                exit={{rotate: 90, opacity: 0}}
                transition={{duration: 0.5}}
            >
                <Title>Обратная связь</Title>
                {isSubmitted &&
                    <SuccessMessage>Спасибо за ваше сообщение, обратная связь очень важна для меня!</SuccessMessage>}
                <ContactForm onSubmit={handleSubmit}>
                    <div>
                        <Label htmlFor="name">Имя:</Label>
                        <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                    </div>
                    <div>
                        <Label htmlFor="email">Email:</Label>
                        <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
                        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                    </div>
                    <div>
                        <Label htmlFor="message">Сообщение:</Label>
                        <Textarea id="message" name="message" value={formData.message} onChange={handleChange}/>
                        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                    </div>
                    <Button type="submit">Отправить</Button>
                </ContactForm>
            </motion.div>
        </PageContainer>

    );
};

