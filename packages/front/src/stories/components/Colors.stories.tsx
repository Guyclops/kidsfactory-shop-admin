/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ColorItem from "../../components/item/ColorItem";

export default {
  title: "Colors|Color",
  component: ColorItem,
};

export const Default = () => {
  return (
    <div css={wrapper}>
      <section>
        <h2>1. 메인 컬러</h2>
        <div>
          <ColorItem title="main color" hash="#205386" rgb="rgb(32, 83, 134)" />
        </div>
      </section>
      <section>
        <h2>2. 아이스크림</h2>
        <div>
          <ColorItem title="main color" hash="#F3D1DC" rgb="rgb(243, 209, 220)" />
        </div>
        <div>
          <ColorItem title="main color" hash="#F6A7C1" rgb="rgb(246, 167, 193)" />
        </div>
        <div>
          <ColorItem title="main color" hash="#FCF0CF" rgb="rgb(252, 240, 207)" />
        </div>
        <div>
          <ColorItem title="main color" hash="#FDCF76" rgb="rgb(253, 207, 118)" />
        </div>
        <div>
          <ColorItem title="main color" hash="#B16E4B" rgb="rgb(177, 110, 75)" />
        </div>
      </section>
      <section>
        <h2>3. 모래사장</h2>
        <div>
          <ColorItem title="main color" hash="#89AEB2" rgb="rgb(137, 174, 178)" />
        </div>
        <div>
          <ColorItem title="main color" hash="#97F2F3" rgb="rgb(151, 242, 243)" />
        </div>
        <div>
          <ColorItem title="main color" hash="#F1E080" rgb="rgb(241, 224, 128)" />
        </div>
        <div>
          <ColorItem title="main color" hash="#F1CD80" rgb="rgb(241, 205, 128)" />
        </div>
        <div>
          <ColorItem title="main color" hash="#E7CFC8" rgb="rgb(231, 207, 200)" />
        </div>
      </section>
      <section>
        <h2>4. 핑크</h2>
        <div>
          <ColorItem title="main color" hash="#D2A3A9" rgb="rgb(210, 163, 169)" />
        </div>
        <div>
          <ColorItem title="main color" hash="#E6DCES" rgb="rgb(230, 220, 237)" />
        </div>
        <div>
          <ColorItem title="main color" hash="#EBC3C1" rgb="rgb(235, 195, 193)" />
        </div>
        <div>
          <ColorItem title="main color" hash="#ECAD8F" rgb="rgb(236, 173, 143)" />
        </div>
        <div>
          <ColorItem title="main color" hash="#AF6E4E" rgb="rgb(175, 110, 78)" />
        </div>
      </section>
      <section>
        <h2>5. 집</h2>
        <div>
          <ColorItem title="main color" hash="#70AE98" rgb="rgb(112, 174, 152)" />
        </div>
        <div>
          <ColorItem title="main color" hash="#ECBE7A" rgb="rgb(236, 190, 122)" />
        </div>
        <div>
          <ColorItem title="main color" hash="#E58B88" rgb="rgb(229, 139, 136)" />
        </div>
        <div>
          <ColorItem title="main color" hash="#9DABDD" rgb="rgb(157, 171, 221)" />
        </div>
        <div>
          <ColorItem title="main color" hash="#DEF0FC" rgb="rgb(222, 240, 252)" />
        </div>
      </section>
    </div>
  );
};

const wrapper = css`
  > section > div {
    display: inline-block;
    margin: 5px;
  }
  > section > h2 {
    margin-left: 5px;
  }
`;
