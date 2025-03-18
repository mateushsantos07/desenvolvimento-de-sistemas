import Header from "@/components/Header";
import "./styles.css"
import Image from "next/image"
import { PiPencilLineBold } from "react-icons/pi";

import cover from '@/assets/cover.avif';
import Avatar from "@/components/Avatar";
import Post from "@/components/Post";

export default function Feed() {
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
                    <Post post={{} as any} />
                    <Post post={{} as any} />
                    <Post post={{} as any} />
                </main>
            </div>
        </div>
    )
}
