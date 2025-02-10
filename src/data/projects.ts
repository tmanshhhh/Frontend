import { v4 as uuidv4 } from 'uuid';
import { Project } from '@/types/Project';
import web_project from '@/assets/web_project.png';
import comp_numb_project from '@/assets/comp_numb_project.png';
import naruto_project from '@/assets/naruto_project.png';

const initialProjectsData = [
    {
        title: 'web',
        description: 'Project on Python.',
        technologies: ['Python'],
        link: 'https://github.com/tmanshhhh/web',
        imageUrl: web_project,
    },
    {
        title: 'complex_numbers',
        description: 'A project about class of complex numbers.',
        technologies: ['C++'],
        link: 'https://github.com/tmanshhhh/complex_numbers',
        imageUrl: comp_numb_project,
    },
    {
        title: 'NarutoQuiz',
        description: 'A python quiz.',
        technologies: ['Python'],
        link: 'https://github.com/tmanshhhh/NarutoQuiz',
        imageUrl: naruto_project,
    },



];

export const projects: Project[] = initialProjectsData.map((p) => ({
    ...p,
    id: uuidv4(),
}));