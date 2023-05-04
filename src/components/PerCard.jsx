import React from "react";
import { Avatar, Row, Col, Text, Button, Spacer, Grid } from "@nextui-org/react";

export const PerCard = ({
  avatarUrl,
  avatarProps,
  css,
  onClick,
  ...props
}) => {
  const [following, setFollowing] = React.useState(false);

  return (
    <Grid.Container
      className="user-twitter-card__container w-96"
      css={{
        mw: "250px",
        borderRadius: "$lg",
        padding: "$sm",
        ...css,
      }}
      onClick={onClick}
      {...props}
    >
      <Row justify="space-between" align="center">
        <Col span={3}>
          <Avatar
            size="lg"
            src="https://res.cloudinary.com/dp7ejpuvw/image/upload/v1683203871/294436560_3286790511641926_7377637893311893845_n_cjdl3n.jpg"
            color="gradient"
            bordered
            squared
            {...avatarProps}
          />
        </Col>
        <Col span={9}>
          <Row>
            <Grid xs={12} direction="column">
              <Text className="user-twitter-card__text" b size={15}>
                Naran Mandakh
              </Text>
              <Text
                className="user-twitter-card__text"
                size={14}
                css={{ mt: "-$3" }}
                color="#888888"
              >
                @gracexnn
              </Text>
            </Grid>
           
          </Row>
        </Col>
      </Row>
      <Grid.Container className="user-twitter-card__username-container">
        <Grid xs={12}>
          <Text
            className="user-twitter-card__text"
            size={14}
            css={{ mt: "$1" }}
            color="#888888"
          >
            Frontend Developer, he/him 🎉
          </Text>
        </Grid>
      </Grid.Container>

      
    </Grid.Container>
  );
};
