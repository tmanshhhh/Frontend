import { useState } from 'react';
import {ContactForm} from "@ styles/ContactStyle/ContactForm.tsx";
import {Title} from "@ styles/ContactStyle/ContactForm.tsx";
import {Label} from "@ styles/ContactStyle/Label.tsx";
import {Input} from "@ styles/ContactStyle/Input.tsx";
import {Textarea} from "@ styles/ContactStyle/TextArea.tsx";
import {Button} from "@ styles/ContactStyle/Button.tsx";
import {ErrorMessage} from "@ styles/ContactStyle/ErrorMessage.tsx";
import {SuccessMessage} from "@ styles/ContactStyle/SuccessMessage.tsx";

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const MAX_LENGTHS = {
    name: 50,
    email: 100,
    message: 500,
};

const MESSAGES = {
    requiredName: 'Заполните поле "Имя"',
    maxLengthName: `Имя не должно превышать ${MAX_LENGTHS.name} символов`,
    requiredEmail: 'Заполните поле "Email"',
    invalidEmail: 'Некорректный email',
    maxLengthEmail: `Email не должен превышать ${MAX_LENGTHS.email} символов`,
    requiredMessage: 'Заполните поле "Сообщение"',
    maxLengthMessage: `Сообщение не должно превышать ${MAX_LENGTHS.message} символов`,
    success: 'Спасибо за ваше сообщение, обратная связь очень важна для меня!',
    error: 'Ошибка при отправке формы. Попробуйте еще раз.',
    title: 'Обратная связь',
    submit: 'Отправить',
    submitting: 'Отправка...',
};

const validEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
    const [errors, setErrors] =  useState<FormErrors>({});
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
        setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setIsSubmitted(false);
        setErrorMessage(null);

        const newErrors: FormErrors = {};

        if (!formData.name) newErrors.name = MESSAGES.requiredName;
        else if (formData.name.length > MAX_LENGTHS.name) newErrors.name = MESSAGES.maxLengthName;

        if (!formData.email) newErrors.email = MESSAGES.requiredEmail;
        else if (formData.email.length > MAX_LENGTHS.email) newErrors.email = MESSAGES.maxLengthEmail;
        else if (!validEmail(formData.email)) newErrors.email = MESSAGES.invalidEmail;

        if (!formData.message) newErrors.message = MESSAGES.requiredMessage;
        else if (formData.message.length > MAX_LENGTHS.message) newErrors.message = MESSAGES.maxLengthMessage;

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                console.log('Отправленные данные:', formData);

                setIsSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            } catch (error) {
                console.error('Ошибка при отправке формы:', error);

                setErrorMessage(MESSAGES.error);
            }
        }

        setIsLoading(false);
    };

    return (
        <div>
            <Title>{MESSAGES.title}</Title>
            {isSubmitted && <SuccessMessage>{MESSAGES.success}</SuccessMessage>}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <ContactForm onSubmit={handleSubmit}>
                <div>
                    <Label htmlFor="name">Имя:</Label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        maxLength={MAX_LENGTHS.name}
                        disabled={isLoading}
                    />
                    {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                </div>
                <div>
                    <Label htmlFor="email">Email:</Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        maxLength={MAX_LENGTHS.email}
                        disabled={isLoading}
                    />
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </div>
                <div>
                    <Label htmlFor="message">Сообщение:</Label>
                    <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        maxLength={MAX_LENGTHS.message}
                        disabled={isLoading}
                    />
                    {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                </div>
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? MESSAGES.submitting : MESSAGES.submit}
                </Button>
            </ContactForm>
        </div>
    );
};

