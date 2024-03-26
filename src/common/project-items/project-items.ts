import { v1 } from 'uuid'

import imgQuiz from '../../assets/image/Quiz.png'
import imgSocialNet from '../../assets/image/social-network.png'
import imgTodo from '../../assets/image/todoList.png'
export const projects = [
  {
    gitLink: 'https://github.com/exleonardo/social-network',
    id: v1(),
    img: imgSocialNet,
    isShowLink: false,
    link: 'http://social-network-vite.vercel.app',
    title: 'Social Network',
  },
  {
    gitLink: 'https://github.com/exleonardo/Todolist',
    id: v1(),
    img: imgTodo,
    isShowLink: false,
    link: 'http://todolist-plum-zeta.vercel.app',
    title: 'Task Manager',
  },
  {
    gitLink: 'https://github.com/exleonardo/project_cards',
    id: v1(),
    img: imgQuiz,
    isShowLink: false,
    link: 'https://project-cards-three.vercel.app',
    title: 'Quiz Decks',
  },
]
