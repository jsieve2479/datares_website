// Import Components
import React from 'react';
import {Header, Container, Image,
            Grid, Button, Divider} from 'semantic-ui-react';

// Import JS
import '../Styles/Consulting.css';
import '../Styles/Utils.css';
import 'semantic-ui-css/semantic.min.css';

// Import Images
import consultingImage from '../Assets/Consulting/consulting_image.svg';
import wave from '../Assets/Consulting/bottom_wave.svg';

class Consulting extends React.Component {
    componentDidMount(){
        const {handleActive} = this.props;
        handleActive("Consulting");
    }
    render() {
        return (
            <div className='Body'>
                
            {/* Main Description  */}
            <div className="Header">
                    <Container>
                        <Grid>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <Image src={consultingImage} size='large'></Image>
                                </Grid.Column>
                                <Grid.Column>
                                    <div className='Title'>
                                        <Header> Consulting </Header>
                                    </div>
                                    <p className='Description'>
                                    Our team offers pro-bono consulting to small businesses, leveraging 
                                    their data to generate meaningful insights and provide concrete 
                                    business value. 
                                    {/* In doing so, we will 
                                    provide our more experienced members the opportunity to hone their 
                                    data science skillsets out in the real world.  */}
                                    </p>   
                                    <Divider></Divider>                                 
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                    
                </div>

                {/* Wave Image */}
                <div style={{backgroundImage: `url(${wave})`,
                                                backgroundSize: "cover",
                                                height: "50vh",
                                                width: "auto",
                                                marginTop: '1%'}}>
                </div>

                {/* Add client list here */}
                <div></div>

            </div>
        );
    }
}

export default Consulting;