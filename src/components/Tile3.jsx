import React from 'react';
import './Tile3.css';

const content = [
  {
    url: 'https://i.imgur.com/E41YjEo.jpg',
    title: 'Airport - MEM',
    caption: 'Where car rental ran out of cars at night.'
  },
  {
    url: 'https://i.imgur.com/GN7rqQE.jpg',
    title: 'Hattie B\'s @ Midtown',
    caption: 'Still the best fried chicken on this fing🌎. (Had it in Birmingham, AL before.)'
  },
  {
    url: 'https://i.imgur.com/FAQpLxW.jpg',
    title: 'Hattie B\'s @ Midtown',
    caption: 'Note to myself: only get mild. This medium heat is not at my level.'
  },
  {
    url: 'https://i.imgur.com/lBInxtn.jpg',
    title: 'Tennessee State Line',
    caption: 'Entering Mississippi. O Brother, Where Art Thou?'
  },
  {
    url: 'https://i.imgur.com/FVRxJGC.jpg',
    title: 'Pyramid',
    caption: 'Fun Fact: Memphis was named after the ancient capital of Egypt on the Nile River.'
  },
  {
    url: 'https://i.imgur.com/VYuSLno.jpg',
    title: 'Bass Pro @ Pyramid',
    caption: 'Most extensive firearm selection I\'ve ever seen.'
  },
  {
    url: 'https://i.imgur.com/xthRiOo.jpg',
    title: 'Children @ Bass Pro @ Pyramid',
    caption: 'While parents picking their toys, children can practice on shooting games arcade stuff and whatever you call this.'
  },
  {
    url: 'https://i.imgur.com/MMEf5zl.jpg',
    title: 'Beale Street',
    caption: 'Heart of tourism. Kinda like Nola. Kinda like Nashville.'
  },
  {
    url: 'https://i.imgur.com/9faYSlj.jpg',
    title: 'Sign @ Beale Street',
    caption: '💕🖤💕🖤💕🖤💕🖤💕'
  },
  {
    url: 'https://i.imgur.com/CgNO79o.jpg',
    title: 'Half Dome Entrance of Daisy @ Beale Street',
    caption: 'Some kind of historical-looking music venue'
  },
  {
    url: 'https://i.imgur.com/gtDxUaj.jpg',
    title: 'Mural @ Beale Street',
    caption: 'My peak tourist moment'
  },
  {
    url: 'https://i.imgur.com/5lcQdY3.jpg',
    title: 'Handy Park @ Beale Street',
    caption: 'small outdoor music venue'
  },
  {
    url: 'https://i.imgur.com/aGznnuq.jpg',
    title: 'Colorful Disco Place near Beale',
    caption: 'This whole page was inspired by this'
  },
  {
    url: 'https://i.imgur.com/TDuHBgb.jpg',
    title: 'Colorful Disco Place near Beale',
    caption: 'This whole page was inspired by this'
  },
  {
    url: 'https://i.imgur.com/o2w1tlu.jpg',
    title: 'Corky\'s BBQ',
    caption: 'Good ribs. And I really fell in love with their dinner roll. The secret is probably nothing but excessive amount of butter. But... damn.'
  },
  {
    url: 'https://i.imgur.com/gQjiAsE.jpg',
    title: 'Shiloh National Military Park',
    caption: 'The guy next to me: \'We lost this one.\'😐😐😐'
  },
]

export default class Tile3 extends React.Component {
  constructor() {
    super();
    this.state = {
      images: []
    }
  }

  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  componentDidMount() {
    const images = this.shuffle(content);
    this.setState({
      images: images
    })
  }


  render() {
    return (
      <div>

        <ul id="categories" class="clr">
          <li class="pusher"></li>
          {this.state.images.map((image, i) =>
            <li key={i}>
              <div>
                <img src={image.url} alt="" />
                <h1>{image.title}</h1>
                <p>{image.caption}</p>
              </div>
            </li>
          )}

          {/* <li class="pusher"></li>
                <li class="pusher"></li> */}

        </ul>
      </div>
    )
  }
}

