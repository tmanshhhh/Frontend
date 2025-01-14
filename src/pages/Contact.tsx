import {ContactStyle} from "@/styles/ContactStyle/ContactStyle.tsx";
import {PageContainer} from "@/styles/ContactStyle/ContactStyle.tsx";
import {Title} from "@/styles/ContactStyle/ContactStyle.tsx";
import {Button} from "@/styles/ContactStyle/ContactStyle.tsx";

export const Contact: React.FC = () => {
    return (
        <PageContainer>
            <Title>Обратная связь</Title>
            <ContactStyle>
                <div>
                    <form>
                        <label>
                            Имя:
                            <input type="text" name="name"/>
                        </label>
                        <br/>
                        <label>
                            Email:
                            <input type="email" name="email"/>
                        </label>
                        <br/>
                        <label>
                            Сообщение:
                            <textarea name="message"></textarea>
                        </label>
                        <br/>
                        <Button type="submit">Send</Button>
                    </form>
                </div>
            </ContactStyle>
        </PageContainer>

    )
};

