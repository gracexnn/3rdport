import { Avatar, Tooltip, Button, Grid } from "@nextui-org/react";
import { PerCard } from "./PerCard";



export default function Avatar1() {
  return (
    <Grid.Container gap={2}>
      <Grid>
        <Avatar
          size="lg"
          src="https://res.cloudinary.com/dp7ejpuvw/image/upload/c_limit,f_jpg,fl_lossy.any_format.preserve_transparency.progressive,h_1600,pg_1,q_auto,w_1600/v1/public/ypqpfyguvog1mlelmlyq"
          color="primary"
          bordered
        />
      </Grid>
      <Grid>
        <Avatar
          size="lg"
          src="https://res.cloudinary.com/dp7ejpuvw/image/upload/c_limit,f_jpg,fl_lossy.any_format.preserve_transparency.progressive,h_1600,pg_1,q_auto,w_1600/v1/public/eu4pvcic9rzhoxcy6w84"
          color="primary"
          bordered
        />
      </Grid>
      <Grid>
        <Avatar
          size="lg"
          src="https://res.cloudinary.com/dp7ejpuvw/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1683203192/public/bcub3i9416gotkiall6j.jpg?_s=public-apps"
          color="primary"
          bordered
        />
      </Grid>
      <Grid>
        <Avatar
          size="lg"
          src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
          color="primary"
          bordered
        />
      </Grid>
 

      <Grid>
        <Tooltip placement="bottomEnd" content={<PerCard />}>
          <Avatar
            pointer
            size="lg"
            src="https://res.cloudinary.com/dp7ejpuvw/image/upload/v1683203871/294436560_3286790511641926_7377637893311893845_n_cjdl3n.jpg"
            color="gradient"
            bordered
            squared
          />
        </Tooltip>
      </Grid>
    </Grid.Container>
  );
}
