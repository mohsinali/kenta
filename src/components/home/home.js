import React, { Component } from 'react';
import { Container, Grid , Image, Button} from 'semantic-ui-react';

class Home extends Component {

  render(){
    return(
      <div>
        <Container>
            <Grid centered columns={1} className="logo_wraper bgContainer">
                <div className="overflow_hidden logo_wraper">
                    <Grid.Column>
                        <Image size='small' className="logo app_logo"  src='assets/images/logo.png' centered />
                    </Grid.Column>
                </div>
                <Grid.Row centered columns={2} className="overflow_hidden bottom_buttons">
                    <Grid.Column>
                        <Button fluid positive content='Register'>

                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button fluid content='Login'>
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
      </div>
    )
  }

}

export default Home;