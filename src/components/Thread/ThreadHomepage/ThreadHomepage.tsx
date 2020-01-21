import React, { memo } from "react";
import * as Styled from "./ThreadHomepage.style";
import { ThreadHomepageProps } from "./interface";
import {
  Avatar,
  Typography,
  Chip,
  Grid,
  CardHeader,
  CardContent,
} from "@material-ui/core";
import { Link } from "components/Utils";
import { Rating } from "components";

export const ThreadHomepage = memo(({ title }: ThreadHomepageProps) => {
  return (
    <Styled.CardWrapper elevation={3}>
      <Grid container alignItems="center">
        <Grid item xs={11}>
          <CardHeader
            avatar={<Avatar arial-label="zoubizoub">ZO</Avatar>}
            title={<Link to="/">{title}</Link>}
            subheader={`par zoubizoub le 21/01/2020 à 02:32`}
          />

          <CardContent>
            <Typography variant="body2" color="textSecondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              cupiditate nulla culpa autem iusto! Corrupti autem impedit
              exercitationem numquam perspiciatis dignissimos tempora eum,
              blanditiis ducimus asperiores cumque pariatur iste officiis est
              nesciunt fugit illo voluptates dicta! Est deleniti voluptatibus
              facere vel reiciendis. Dolores eum, iusto, cupiditate vitae itaque
              magni nobis cumque laboriosam corrupti voluptatum nemo porro
              praesentium facilis illum autem veritatis aliquam pariatur
              asperiores ...
            </Typography>
          </CardContent>

          <Styled.CardCategories>
            <Chip color="primary" label="Politique" />
            <Chip color="inherit" label="Informations" />
          </Styled.CardCategories>
        </Grid>
        <Grid item xs={1}>
          <Rating />
        </Grid>
      </Grid>

      {/* <Grid container alignItems="center">
        <Grid item xs={11}> 
          <Typography variant="h6" component="h3">
            <Link to="/">{title}</Link>        
          </Typography>
          <Typography>Crée par zoubizoub le 21 janvier 2020 à 02:32</Typography>
          <Styled.Categories>
            <Chip label="Politique" />
            <Chip label="Informations" />
          </Styled.Categories>
        </Grid>
        <Grid item xs={1}>
          <Rating />
        </Grid>
      </Grid>     */}
    </Styled.CardWrapper>
  );
});
