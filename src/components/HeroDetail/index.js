import React from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { connect } from "react-redux";
import { setHero } from "../../store/actions";

function HeroDetail({ hero, close }) {
  if (!hero) return <div />;

  return (
    <Modal isOpen toggle={close}>
      <>
        <ModalHeader>
          <img
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt={hero.name}
            style={{ width: "100%" }}
          />

          <h2 style={{ marginTop: "16px" }}>{hero.name}</h2>
        </ModalHeader>

        <ModalBody>
          {hero.p ? <p>{hero.p}</p> : <p>Descrição não encontrada.</p>}

          <h4 h4>Series</h4>

          {hero.series.items.map(item => (
            <p key={item.name}>{item.name}</p>
          ))}

          <h4 h4>Histórias</h4>

          {hero.stories.items.map(item => (
            <p key={item.name}>{item.name}</p>
          ))}
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={close}>
            Fechar
          </Button>
        </ModalFooter>
      </>
    </Modal>
  );
}

const mapStateToProps = state => ({
  hero: state.selectedHero
});

const mapDispatchToProps = {
  close: () => setHero(null)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroDetail);
