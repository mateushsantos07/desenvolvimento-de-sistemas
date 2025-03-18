import Avatar from "../Avatar";
import "./styles.css";

type Author = {
    name: string;
            role: string;
            avatarUrl: string;
}
type PostProps = {
    post: {
        author: Author;
        publishAt: Date;
        content: string;
    }
}

export default function Post({ post }: PostProps) {
    return (
        
        <article className="post">
            <header>
            <div className = "author">
                <Avatar src={"https://github.com/mateushsantos07.png"} hasBorder/>
                    <div className="author-info">
                        <strong>Mateus Henrique</strong>
                        <span>Desenvolvedor</span>

                    </div>
                </div>
                <time> Públicado há 2 horas</time>
            </header>

            <div className="content">
                <p>Bom dia, ótimo trabalho gostaria de saber se vocês publicariam mais sobre.</p>
            </div>

            <form className="form">
                <strong>Deixe seu comentário </strong>

                <textarea placeholder="Deixe um comentário..."/>

                <footer>
                    <button className="footer-button">
                        Publicar
                    </button>
                </footer>

            </form>

        </article>
    )
}