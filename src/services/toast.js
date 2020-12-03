import { NotificationManager } from 'react-notifications';


export const Toast = ({ type = 'success', message }) => {
    NotificationManager[type](message)
}