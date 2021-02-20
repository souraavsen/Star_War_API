import React from "react";
import { Card, Grid, Tab } from "semantic-ui-react";

const Character = ({ character }) => {
  return (
      <div className="char">
          <br></br>
          <h1>People</h1>
      <Tab></Tab>
      <Grid columns={3} divided>
        {character.map((char) => {
          return (
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>{char.name}</Card.Header>
                  <Card.Description>
                    <strong>Height</strong>
                    <p>{char.height}</p>
                    <strong>Mass</strong>
                    <p>{char.mass}</p>
                    <strong>Barth Year</strong>
                    <p>{char.birth_year}</p>
                    <strong>Gender</strong>
                    <p>{char.gender}</p>
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
