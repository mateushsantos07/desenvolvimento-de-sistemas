import { fireEvent, render, screen } from "@testing-library/react";
import Comment from ".";

const mockComment = {
    id: "1",
    like: 3,
    comment: "oi tudo bem",
    publishedAt: new Date(),
    author: {
        name: "Joe Doe",
        role: "Dev",
        avatarUrl: 'jpedoe.png'
    }

}

describe('Comment component', () => {
    it("Deve renderizar um comentário", () => {
        render(<Comment comment={mockComment} handleDelete={jest.fn()} handleLike={jest.fn()}/>)
        expect(screen.getByText("Joe Doe")).toBeInTheDocument();
        expect(screen.getByText("oi tudo bem")).toBeInTheDocument();
        expect(screen.getByText("há menos de um minuto")).toBeInTheDocument();
        expect(screen.getByText("Aplaudir")).toBeInTheDocument();
        expect(screen.getByText("3")).toBeInTheDocument();
    })
    
    it("Deve verificar se a função hanleLike foi chamada com ID correto", () => {
        const handleLike = jest.fn();
        render(<Comment comment={mockComment} handleDelete={jest.fn()} handleLike={handleLike}/>)
        
        const likeButton = screen.getByText("Aplaudir");
        fireEvent.click(likeButton);

        expect(handleLike).toHaveBeenCalled();
        expect(handleLike).toHaveBeenCalledTimes(1);
        expect(handleLike).toHaveBeenCalledWith(expect.any(Object), "1")
    })

    it("Deve verificar se a função hanleDelete foi chamada com ID correto", () => {
        const handleDelete = jest.fn();
        render(<Comment comment={mockComment} handleDelete={handleDelete} handleLike={jest.fn()}/>)
        
        const deleteButton = screen.getByTestId("button-delete");
        fireEvent.click(deleteButton);

        expect(handleDelete).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenCalledTimes(1);
        expect(handleDelete).toHaveBeenCalledWith(expect.any(Object), "1")
    })
});