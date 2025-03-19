'use client'
import Header from "@/components/Header";
import "./styles.css"
import Image from "next/image"
import { PiPencilLineBold } from "react-icons/pi";

import cover from '@/assets/cover.avif';
import Avatar from "@/components/Avatar";
import Post from "@/components/Post";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Feed() {
    const [posts, setPosts] = useState<any[]>([]);
    const [content, setContent] = useState<string>('');
    useEffect(() => {
        loadPost();
    }, [])

    async function loadPost() {
        const response = await axios.get("http://localhost:3001/posts");
        setPosts(response.data)
    }

    async function handleCreatePost() {
        const post = {
            id: Post.length + 1,
            content: content,
            publishedAt: new Date().toISOString(),
            author: {
                name: "Mateus dos Santos",
                role: "Estudante",
                avatarUrl: "https://github.com/mateushsantos07.png"
            }
        }
        await axios.post("http://localhost:3001/posts", post)
        await loadPost();
        setContent('');
    }

    return (
        <div>
            <Header />
            <div className="container">
                <aside className="sidebar">
                    <Image src={cover} alt="cover" className="cover" />

                    <div className="profile">
                        <Avatar src="https://github.com/mateushsantos07.png" hasBorder />
                        <strong>Mateus dos Santos</strong>
                        <span>Estudante</span>
                        <footer>
                            <button className="button-edit-profile">
                                <PiPencilLineBold />
                                Editar
                            </button>
                        </footer>
                    </div>


                </aside>

                <main className="main">
                    <form onSubmit={handleCreatePost}>
                        <textarea 
                        placeholder="O que você está pensando? "
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        />

                        <button type = "submit">Publicar</button>

                    </form>
                    {posts.map(item =>(
                        <Post post={item} key={item.id} />
                    ))}
                </main>
            </div>
        </div>
    )
}
