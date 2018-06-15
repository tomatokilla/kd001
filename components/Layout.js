import Head from 'next/head';
import Header from '../components/Header';


class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Head>
          <title>KD001</title>
          <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
          <link rel="stylesheet" href="../assets/style/mystyle.css"/>
        </Head>
        <Header authenticated={this.props.authenticated}></Header>
        <div className="container" >
          {this.props.children}
        </div>
      </div>
    )
  }
}


export default Layout;