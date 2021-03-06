import React from "react";
import { Icon, PreviewCard, Rating } from "../../../components/Component";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown, Progress, Row, Col } from "reactstrap";

export const SellerCard = ({ ...props }) => {
  return (
    <React.Fragment>
      <PreviewCard className="h-100 seller-card">
        <div className="seller">{props.children}</div>
      </PreviewCard>
    </React.Fragment>
  );
};

export const SellerHead = ({ name, score, favorite, logo }) => {
  return (
    <div className="seller-head">
      <div
        onClick={(ev) => {
          ev.preventDefault();
        }}
        className="seller-title"
      >
        <img className="logo" src={logo} />
        <div className="seller-info">
          <h6 className="title">{name}, <small>LTD</small></h6>
        </div>
        <div className="score">
          <Rating type="star" className="text-success" initVal={parseInt(score)}></Rating>
        </div>
      </div>
      <div className="seller-group">
        <div className="favorite">
          {favorite ? (
            <Icon name="heart-fill" />
          ) : (
            <Icon name="heart" />
          )}
          </div>
        <div className="message">
          <Icon name="chat" />
        </div>
      </div>
    </div>
  );
};

export const SellerBody = ({seller}) => {
  return (
    <React.Fragment>
      {/* <div className="seller-details">{seller.description}</div> */}
      <div className="seller-progress">
        <Row className="seller-progress-details">
          <Col lg="3">
            <img src={seller.avatar} />
          </Col>
          <Col lg="3" className="detail">
            <div className="location-group">
              <span className="title">LOCATION</span>
              <h4>{seller.location}</h4>
            </div>
            <div className="verification-group">
              <span className="title">VERIFICATION</span>
              <h4>{seller.verification ? ("Verified") : ("Unverified")}</h4>
            </div>
          </Col>
          <Col lg="3" className="detail">
            <div className="industry-group">
              <span className="title">INDUSTRY</span>
              <h4>{seller.industry}</h4>
            </div>
            <div className="sector-group">
              <span className="title">SECTOR</span>
              <h4>{seller.sector}</h4>
            </div>
          </Col>
          <Col lg="3" className="detail">
            <div className="deal-group">
              <span className="title">TOTAL DEAL</span>
              <h4>
                <small className="unit">$</small><span className="total_price">{seller.total_price}</span>
                <span className="deals">{seller.totalDeals} DEALS</span>
              </h4>
            </div>
            <div className="deal-group">
              <span className="title">RESPONSE TIME</span>
              <Rating type="clock" className="text-success" initVal={parseInt(seller.response_score)}></Rating>
            </div>
          </Col>
        </Row>
        <span className="progress-title">SCORE</span>
        <Progress striped value={parseInt(seller.score * 100 / 5)} color="success"></Progress>
      </div>
    </React.Fragment>
  );
};
