import {useState, ChangeEvent} from 'react';

import {IPostCreate} from '@domain/contracts';

type Props = {
  createPostUseCase: IPostCreate;
};

export function CreatePost({createPostUseCase}: Props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  function handleInputTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleInputBody(event: ChangeEvent<HTMLInputElement>) {
    setBody(event.target.value);
  }

  async function handleSubmit() {
    try {
      await createPostUseCase.create({title, body});
      setMessage('Post criado com sucesso!');
    } catch (error) {
      setMessage('Error ao criar novo post!');
    }
  }

  return (
    <div>
      {message && <span>{message}</span>}
      <h1>Criar novo post</h1>
      <input
        type="text"
        placeholder="Titulo"
        value={title}
        onChange={handleInputTitle}
      />

      <input
        type="text"
        placeholder="Corpo"
        value={body}
        onChange={handleInputBody}
      />
      <button onClick={handleSubmit}>Adicionar</button>
    </div>
  );
}
