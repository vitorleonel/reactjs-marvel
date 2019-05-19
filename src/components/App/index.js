import React, { useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

import HeroDetail from "../HeroDetail";

import { connect } from "react-redux";
import { requestHeroes, setHero } from "../../store/actions";

function App({ heroes, hero, pagination, getHeroes, selectHero }) {
  useEffect(() => {
    getHeroes();
  }, [getHeroes]);

  useEffect(() => {
    window.addEventListener("scroll", loadMore);
    return () => window.removeEventListener("scroll", loadMore);
  });

  function loadMore() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;

    if (pagination.offset >= pagination.total) return;

    getHeroes(pagination.offset + 20);
  }

  function renderHero(hero) {
    return (
      <Card key={hero.name}>
        <CardImg
          top
          width="100%"
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt={hero.name}
        />
        <CardBody>
          <CardTitle>{hero.name}</CardTitle>

          <Button onClick={() => selectHero(hero)}>Ver detalhes</Button>
        </CardBody>
      </Card>
    );
  }

  return (
    <Container>
      <Row>
        {heroes.map(hero => (
          <Col xs="3">{renderHero(hero)}</Col>
        ))}
      </Row>

      {hero && <HeroDetail />}
    </Container>
  );
}

const mapStateToProps = state => ({
  heroes: state.heroes,
  hero: state.selectedHero,
  pagination: state.pagination
});

const mapDispatchToProps = {
  getHeroes: (offset = 0) => requestHeroes(offset),
  selectHero: hero => setHero(hero)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
