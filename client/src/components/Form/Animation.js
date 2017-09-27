
import Animated from 'animated/lib/targets/react-dom';
import Easing from 'animated/lib/Easing';

class App extends Component {
  animatedValue = new Animated.Value(0)
  animate = () => {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 5000,
        easing: Easing.elastic(1)
      }
    ).start();
  }
  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-120, 0],
    })
    return (
      <div className="App">
          <div style={styles.button} onClick={this.animate}>Animate</div>
          <Animated.div
            style={
              Object.assign(
                {},
                styles.box,
                { opacity: this.animatedValue, marginLeft })}>
                <p>Thank you for signing up!</p>
                <p>Next search for a skill you'd like to learn</p>
            </Animated.div>
      </div>
    );
  }
}
view rawApp.js hosted with ❤ by GitHub