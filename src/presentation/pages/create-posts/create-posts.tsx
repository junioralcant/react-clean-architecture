import {IPostCreate} from '../../../domain/contracts/post-create.contracts';
import {useState, ChangeEvent} from 'react';

type Props = {
  createPostUseCase: IPostCreate;
};

export function CreatePost({createPostUseCase}: Props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function handleInputTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleInputBody(event: ChangeEvent<HTMLInputElement>) {
    setBody(event.target.value);
  }

  function handleSubmit() {
    createPostUseCase.create({title, body});
  }

  return (
    <div>
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
