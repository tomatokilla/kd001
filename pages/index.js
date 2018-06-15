import Layout from "../components/Layout";

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
    }
  }

  render() {
    return (
      <Layout authenticated={this.state.authenticated}>
        <div>
          <section>
            <p>
              {this.state.authenticated ? "Hello user_foo" : "Hello stranger"}, 
              welcome 2 KD001!
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}



export default Home;