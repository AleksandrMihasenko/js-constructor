import image from './images/js-image.png';
import { TitleBlock, ImageBlock, ColumnsBlock, TextBlock } from './classes/blocks'

export const model = [
    new TitleBlock( 'Конструктор сайтов на чистом Javascript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),
    new ImageBlock( image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center',
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'image'
    }),
    new TextBlock('Здесь инструкция по использованию.', {
        styles: {
            background: 'linear-gradient(to right, #f2994a, #f2c94c)',
            'font-weight': 'bold',
            padding: '1rem'
        }
    }),
    new ColumnsBlock( [
        'Приложение на чистом Javascript, без использования фреймворков',
        'Тренировка использования принципов SOLID',
        'Остается простор для улучшений'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            color: '#fff',
            'font-weight': 'bold',
            padding: '2rem'
        }
    })
];
