import React from 'react';
import {Header, Menu, 
        Button, Divider, Image, Icon,
        Grid, Container} from 'semantic-ui-react';

import Particles from 'react-particles-js';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

import logo from './images/logo.svg';
import orangeBar from './images/orange_bar.svg';
import navbarWave from './images/navbar_wave.svg';
import bottomWave from './images/bottom_wave.svg';
import teamWave from './images/teampage_wave.svg';
import numberWave from './images/number_wave.svg';
import datablogWave from './images/datablog_wave.svg';

class App extends React.Component {
  constructor() {
    super()
    this.state = { activeItem: 'Home' }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render () {
    const {activeItem} = this.state;
    return (
      <div>

          <div style={{backgroundImage: `url(${navbarWave})`,
                       backgroundSize: "cover",
                       height: "45vh",
                       width: "100%"}}>
            <div className="Navbar-items">
            <Menu position="right" size="massive" secondary>
              <Menu.Menu position='right'>
                <Menu.Item
                  name='Home'
                  active={activeItem === 'Home'}
                  onClick={this.handleItemClick}
                  style={{color: "white", 
                          fontWeight: "bold",
                          fontSize: 20}} />
                <Menu.Item
                  name='Blog'
                  active={activeItem === 'Blog'}
                  onClick={this.handleItemClick}
                  style={{color: "white", 
                          fontWeight: "bold",
                          fontSize: 20}} />
                <Menu.Item
                  name='Consulting'
                  active={activeItem === 'Friends'}
                  onClick={this.handleItemClick}
                  style={{color: "white", 
                          fontWeight: "bold",
                          fontSize: 20}} />
                <Menu.Item
                  name='Research'
                  active={activeItem === 'Research'}
                  onClick={this.handleItemClick}
                  style={{color: "white", 
                          fontWeight: "bold",
                          fontSize: 20}} />
                <Menu.Item
                  name='Team'
                  active={activeItem === 'Team'}
                  onClick={this.handleItemClick}
                  style={{color: "white", 
                          fontWeight: "bold",
                          fontSize: 20}} />
              </Menu.Menu>
            </Menu>
            </div>
          </div>

        <div className="App">
          <div className="Landing-header">
            <Container fluid>
              <Image src={logo} size="huge" centered></Image>
            <br></br>
            <p>
              <strong>
                The Premier Data Science Organization @ UCLA
              </strong> 
            </p><br></br>
            <Button size="massive" color="orange" style={{fontSize: "2rem", 
                                                          borderRadius: 35, 
                                                          width: "30vh"}}>
              Join Us
            </Button>
            </Container>
          </div>

          <div className="intro-header">
              <Container>
                <Grid>
                  <br></br>
                  <Grid.Row>
                    <Image src={ orangeBar } size='large'></Image>
                    <Header style={{fontSize: 50}}>
                      At DataRes, we solve problems and craft stories with data.
                    </Header>
                    <p>
                      We provide a platform for aspiring data scientists and analysts
                      to collaborate on impactful data projects. If you love playing with
                      data, creating powerful visualizations, or building predictive models,
                      you have a home at DataRes.
                    </p>
                  </Grid.Row>
                </Grid>
              </Container>
          </div>

          <div className='Stats-header' style={{backgroundImage: `url(${numberWave})`,
                                                backgroundSize: "cover",
                                                height: "50vh",
                                                width: "auto"}}>
            <Container fluid>
              <Grid>
                <Grid.Row columns={4} style={{margin: 'auto'}}>
                  <Grid.Column stretched>
                    <Header style={{fontSize: 100, color: 'white'}} centered>18</Header>
                    <p><strong>Articles Published</strong></p>
                  </Grid.Column>
                  <Grid.Column>
                  <Header style={{fontSize: 100, color: 'white'}} centered>5</Header>
                    <p><strong>Research Projects</strong></p>
                  </Grid.Column>
                  <Grid.Column>
                  <Header style={{fontSize: 100, color: 'white'}} centered>70+</Header>
                    <p><strong>Active Members</strong></p>
                  </Grid.Column>
                  <Grid.Column>
                  <Header style={{fontSize: 100, color: 'white'}} centered>35+</Header>
                    <p><strong>Companies Represented</strong></p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>

          <div className='datablog-header' style={{backgroundImage: `url(${datablogWave})`,
                                                backgroundSize: "cover",
                                                height: "30vh",
                                                width: "auto"}}>
            <Container>
              <Grid>
                  <Grid.Row>
                    <Grid.Column>
                      <Image src={ orangeBar } size='large'></Image>
                      <Header style={{fontSize: 40, color: 'white'}}>
                        Data Blog: Creating data-backed narratives.
                      </Header>
                      <p>
                        We publish a variety of data centric journal articles.
                        Take a look at some of our featured stories.
                      </p>
                      <a href='/datablog'>
                      <Button size="huge" color="orange">
                        Learn More
                      </Button></a>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
            </Container>
          </div>

          <div className="datares-header">
            <Container>
              <Grid divided='vertically'>
                <Grid.Row>
                  <div>
                  <Image src={ orangeBar } size='large'></Image>
                  <Header style={{fontSize: 40}}>
                    Research: Pushing the limits of machine learning. 
                  </Header>
                  <p>
                    We tackle advanced machine learning problems in the areas of computer vision, 
                    natural language processing, and reinforcement learning. 
                  </p>
                  <a href="/research">
                  <Button size="huge" color="orange">
                        Learn More
                  </Button></a>
                  </div>
                  <br></br>
                  <div style={{marginTop: 100}}>
                    <Image src={ orangeBar } size='large'></Image>
                    <Header style={{fontSize: 40}}>
                      Consulting: Developing data-driven solutions.
                    </Header>
                    <p>
                    We offer pro bono consulting services for startups 
                    and companies within the Los Angeles area.
                    </p>
                    <a href='/consulting'>
                    <Button size="huge" color="orange">
                        Learn More
                    </Button></a>
                  </div>
                </Grid.Row>
              </Grid>
            </Container>
          </div>

          <div className="General-header">
            <Container fluid>
              <Header style={{fontSize: 40}}>
                Want To Contribute To DataRes?
              </Header> <br/>
              <Button size="massive" color="orange" >
                Sponsor Us
              </Button>
            </Container>
          </div>

          <div className='Footer'>
            <Container fluid style={{marginTop: 20, marginBottom: 20}}>
              <Image src={logo} size='medium' centered></Image>
              <br></br>
              <p>
              If you are interested in learning more about our organization or collaborating with us, 
              you can reach out to us at <br></br> 
              <a href="mailto:ucladatares@gmail.com">ucladatares@gmail.com</a> or get in touch with us online.
              </p> <br></br>
              <div>
                <Button color='facebook'>
                  <Icon name='facebook' /> Facebook
                </Button>
                <Button color='twitter'>
                  <Icon name='twitter' /> Twitter
                </Button>
                <Button color='linkedin'>
                  <Icon name='linkedin' /> LinkedIn
                </Button>
                <Button color='instagram'>
                  <Icon name='instagram' /> Instagram
                </Button>
                <Button color='youtube'>
                  <Icon name='youtube' /> YouTube
                </Button>
              </div>
              <br></br><br></br>
              <p>
              © DataRes 2020 
              </p>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}





export default App;
