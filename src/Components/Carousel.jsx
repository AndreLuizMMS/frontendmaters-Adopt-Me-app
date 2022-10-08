import { Component } from 'react';

class Carousel extends Component {
  state = {
    active: 0
  };

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg']
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    const handleIndexClick = event => {
      this.setState({
        active: +event.target.dataset.index
      });
    };

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              onClick={handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? 'active' : ''}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
