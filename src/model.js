import image from './images/js-image.png';

export const model = [
    { type: 'title', value: 'Конструктор сайтов на чистом Javascript', options: {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
        }},
    {type: 'image', value: image, options: {
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
        }},
    { type: 'text', value: 'Здесь инструкция по использованию.', options: {
            styles: {
                background: 'linear-gradient(to right, #f2994a, #f2c94c)',
                'font-weight': 'bold',
                padding: '1rem'
            }
        } },
    { type: 'columns', value: [
            'Приложение на чистом Javascript, без использования фреймворков',
            'Тренировка использования принципов SOLID',
            'Остается простор для улучшений'
        ], options: {
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                color: '#fff',
                'font-weight': 'bold',
                padding: '2rem'
            }
        }}
];
