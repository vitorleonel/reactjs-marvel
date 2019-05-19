import React from "react";

import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

import { connect } from "react-redux";
import { setHero } from "../../store/actions";

function HeroDetail({ hero, close }) {
  if (!hero) return <div />;

  return (
    <Modal isOpen toggle={close}>
      <ModalBody>
        <div className="border-bottom mb-3">
          <img
            className="w-100"
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt={hero.name}
          />

          <h3 className="pt-3">{hero.name}</h3>
          <p>{hero.p ? hero.p : "Descrição não encontrada"}</p>
        </div>

        <div>
          <h5 className="my-3">Series</h5>

          <ul className="list-group">
            {hero.series.items.map(item => (
              <li className="list-group-item" key={item.name}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="my-3">Histórias</h5>

          <ul className="list-group">
            {hero.stories.items.map(item => (
              <li className="list-group-item" key={item.name}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </ModalBody>

      <ModalFooter>
        <Button color="primary" onClick={close}>
          Fechar
        </Button>
      </ModalFooter>
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
