import React from "react";
import { Card, Grid, Tab } from "semantic-ui-react";

const Character = ({ planets }) => {
  return (
    <div className='char'>
      <br></br>
      <h1>Plantes</h1>
      <Tab></Tab>
      <Grid columns={3} divided>
        {planets.map((planet ) => {
          return (
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header >{planet.name}</Card.Header>
                  <Card.Description>
                    <strong>Rotation Period</strong>
                    <p>{planet.rotation_period}</p>
                    <strong>Prbital Period</strong>
                    <p>{planet.orbital_period}</p>
                    <strong>Gravity</strong>
                    <p>{planet.gravity}</p>
                    <strong>Climate</strong>
                    <p>{planet.climate}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </div>
  );
};

export default Character;
