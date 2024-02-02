"use client"

import { PropsWithChildren } from "react";
import { textReview, textReviewContainer } from "./page.css";

import {
  App,
  Block,
  List,
  MenuListItem,
  Navbar,
  BlockTitle,
  ListInput,
} from "konsta/react";

const WriteReviewLayout = (
  {children}: PropsWithChildren
) => {
  return (
    <App theme="ios">
      <Navbar
        title="메뉴에 대한 리뷰를 작성해주세요!"
      ></Navbar>

      <Block strongIos>
        <BlockTitle>이 메뉴는 어땠나요?</BlockTitle>

        <List strongIos insetIos>
          <MenuListItem
            title="⭐️⭐️⭐️"
            subtitle="또 주문하고싶은 맛이었어요!"
            active={true}
            />
          <MenuListItem
            title="⭐️⭐️"
            subtitle="그냥저냥 괜찮았어요."
            active={false}
            />
          <MenuListItem
            title="⭐️"
            subtitle="한 번은 먹을만 했어요."
            active={false}
            />
          <MenuListItem
            title="💀"
            subtitle="다시는 주문 안할거에요."
            active={false}
            />
        </List>
      </Block>

      <Block strongIos>
        <BlockTitle>메뉴에 대한 후기를 자유롭게 적어주세요!</BlockTitle>
        <List strongIos insetIos> 
          <div className={textReviewContainer}>
            <textarea
              className={textReview}
            />
          </div>
        </List>
      </Block>
    </App>
  );
}

export default WriteReviewLayout;