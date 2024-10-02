import { v4 as uuidv4 } from 'uuid';
import { Project1, Project2, Project3 } from '../assets/images';

export const PortfolioData = [
    {
        id: uuidv4(),
        img: Project3,
        Name: "SHARE IT",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit penatibus egestas praesent, ac vivamus "
    },
    {
        id: uuidv4(),
        img: Project2,
        Name: "SKETCH NEST",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit penatibus egestas praesent, ac vivamus "
    },
    {
        id: uuidv4(),
        img: Project1,
        Name: 'KLENZRA',
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit penatibus egestas praesent, ac vivamus "
    }
];
