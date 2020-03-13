import { DataTypes, Model } from "sequelize";
import pool from ".";

const sequelize = pool.sequelize;

class Shops extends Model {}

Shops.init(
  {
    s_no: {
      type: DataTypes.INTEGER({ length: 11 }).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "매장 번호",
    },
    s_id: {
      type: DataTypes.STRING(22),
      allowNull: false,
      comment: "아이디",
    },
    s_pwd: {
      type: DataTypes.CHAR(8),
      allowNull: false,
      comment: "비밀번호",
    },
    s_nskey: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      comment: "고유키",
    },
    s_name: {
      type: DataTypes.STRING(22),
      allowNull: false,
      comment: "매장 이름",
    },
    s_visit_name: {
      type: DataTypes.STRING(8),
      allowNull: false,
      comment: "솔루션 표시 이름",
    },
    s_corp_number: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      comment: "사업자 번호",
    },
    s_address: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "주소",
    },
    s_latitude: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: "위도",
    },
    s_longitude: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: "경도",
    },
    s_type: {
      type: DataTypes.ENUM("normal", "test", "leave"),
      allowNull: false,
      defaultValue: "normal",
      comment: "업체 유형(일반, 테스트, 탈퇴)",
    },
    s_lv: {
      type: DataTypes.ENUM("default", "lv1", "lv2", "lv3"),
      allowNull: false,
      defaultValue: "default",
      comment: "메뉴 사용 권한",
    },
    s_default_min: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "기본 시간",
    },
    s_coupon_price: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "정기권 가격",
    },
    s_coupon_min: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "정기권 시간",
    },
    s_stamp_default_min: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "스탬프 자동 계산 분",
    },
    s_buy_coupon_count: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "정기권 묶음 수량",
    },
    s_set_sms: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      defaultValue: 500,
      comment: "기본 sms 수",
    },
    s_set_lms: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      defaultValue: 100,
      comment: "기본 lms 수",
    },
    s_sms: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "사용한 sms 수",
    },
    s_lms: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "사용한 lms 수",
    },
    s_kakao_set_sms: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "기본 카카오 수량",
    },
    s_kakao_sms: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "사용한 카카오 수량",
    },
    s_kakao_set_lms: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "사용안함",
    },
    s_kakao_lms: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "사용안함",
    },
    s_char_sms_time: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "통계 문자 시간",
    },
    s_is_visit_sms: {
      type: DataTypes.ENUM("on", "off"),
      allowNull: false,
      defaultValue: "off",
      comment: "방문시 SMS 발송",
    },
    s_is_out_sms: {
      type: DataTypes.ENUM("on", "off"),
      allowNull: false,
      defaultValue: "off",
      comment: "퇴장전 SMS 발송",
    },
    s_is_birth_sms: {
      type: DataTypes.ENUM("on", "off"),
      allowNull: false,
      defaultValue: "off",
      comment: "생일자 SMS 발송",
    },
    s_sms_cancel_enterance: {
      type: DataTypes.ENUM("on", "off"),
      allowNull: false,
      defaultValue: "on",
      comment: "입장취소 문자 알림",
    },
    s_sms_buy_coupon: {
      type: DataTypes.ENUM("on", "off"),
      allowNull: false,
      defaultValue: "on",
      comment: "정기권 구매 문자 알림",
    },
    s_sms_cancel_coupon: {
      type: DataTypes.ENUM("on", "off"),
      allowNull: false,
      defaultValue: "on",
      comment: "정기권 취소 문자 알림",
    },
    s_sms_use_coupon: {
      type: DataTypes.ENUM("on", "off"),
      allowNull: false,
      defaultValue: "on",
      comment: "정기권 사용 문자 알림",
    },
    s_sms_deact_shop_user: {
      type: DataTypes.ENUM("on", "off"),
      allowNull: false,
      defaultValue: "on",
      comment: "탈퇴회원 문자 알림",
    },
    s_sms_stamp_coupon: {
      type: DataTypes.ENUM("on", "off"),
      allowNull: false,
      defaultValue: "on",
      comment: "스탬프 발급 쿠폰 문자 알림",
    },
    s_stamp_type: {
      type: DataTypes.ENUM("off", "child", "in", "acc_child", "acc_in"),
      allowNull: false,
      defaultValue: "off",
      comment: "스탬프 적립 방식",
    },
    s_coupon_to_stamp: {
      type: DataTypes.ENUM("y", "n"),
      allowNull: false,
      defaultValue: "y",
      comment: "사용 안함",
    },
    s_phone: {
      type: DataTypes.STRING(13),
      allowNull: false,
      comment: "담당자 연락처",
    },
    s_manager: {
      type: DataTypes.STRING(22),
      allowNull: false,
      comment: "담당자",
    },
    s_contact: {
      type: DataTypes.STRING(22),
      allowNull: false,
      comment: "매장 연락처",
    },
    s_is_exp_coupon: {
      type: DataTypes.ENUM("on", "off"),
      allowNull: false,
      defaultValue: "off",
      comment: "정기권 만료 사용 여부",
    },
    s_exp_date_coupon: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "정기권 만료 기간",
    },
    s_exp_send_hour: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "정기권 만료 문자 발송시간",
    },
    s_exp_send_type: {
      type: DataTypes.ENUM("sms", "lms"),
      allowNull: false,
      defaultValue: "sms",
      comment: "사용 안함",
    },
    s_exp_lms_msg: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "사용 안함",
    },
    s_switch_coupon_auto: {
      type: DataTypes.ENUM("on", "off"),
      allowNull: false,
      defaultValue: "off",
      comment: "정기권 입장시 정기권 자동계산",
    },
    s_switch_stamp_auto: {
      type: DataTypes.ENUM("on", "off"),
      allowNull: false,
      defaultValue: "off",
      comment: "입장시 스탬프 자동계산",
    },
    s_status_term1: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      defaultValue: 0,
      comment: "시설물 사용 동의 버전",
    },
    s_term1: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "시설물 사용 동의 내용",
    },
    s_is_temr1: {
      type: DataTypes.ENUM("on", "off"),
      allowNull: false,
      defaultValue: "off",
      comment: "시설물 사용 동의 on, off",
    },
    s_m_logo_img: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "모바일 로고",
    },
    s_m_top_img: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "모바일 상단",
    },
    s_m_banner_img: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "모바일 배너",
    },
    s_m_info_img: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "매장 소개",
    },
    s_m_use_img: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "정기권 사용",
    },
    s_m_unused_img: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "정기권 미사용",
    },
    s_st_use_img: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "스탬프 사용",
    },
    s_st_unused_img: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "스탬프 미사용",
    },
    s_st_gift_img: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "쿠폰 표시",
    },
    s_st_gift_use_img: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "쿠폰 사용",
    },
    s_enable: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      defaultValue: 1,
      comment: "매장 사용 유무",
    },
    s_charge_type: {
      type: DataTypes.TINYINT({ length: 3 }),
      allowNull: false,
      defaultValue: 2,
      comment: "0: 올림, 1: 내림, 2: 반올림",
    },
    s_charge_allowed_minute: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      defaultValue: 0,
      comment: "",
    },
    s_charge_price_minute: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      defaultValue: 0,
      comment: "",
    },
    s_charge_price: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      defaultValue: 0,
      comment: "",
    },
    s_charge_calculate_type: {
      type: DataTypes.TINYINT({ length: 3 }),
      allowNull: false,
      defaultValue: 0,
      comment: "",
    },
    s_charge_allowed_minute_weekend: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      defaultValue: 0,
      comment: "",
    },
    s_charge_price_minute_weekend: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      defaultValue: 0,
      comment: "",
    },
    s_charge_price_weekend: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      defaultValue: 0,
      comment: "",
    },
    s_charge_type_post: {
      type: DataTypes.TINYINT({ length: 3 }),
      allowNull: false,
      defaultValue: 2,
      comment: "",
    },
    s_charge_allowed_minute_post: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      defaultValue: 0,
      comment: "",
    },
    s_charge_price_minute_post: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      defaultValue: 0,
      comment: "",
    },
    s_charge_price_post: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      defaultValue: 0,
      comment: "",
    },
    s_charge_allowed_minute_weekend_post: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      defaultValue: 0,
      comment: "",
    },
    s_charge_price_minute_weekend_post: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      defaultValue: 0,
      comment: "",
    },
    s_charge_price_weekend_post: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      defaultValue: 0,
      comment: "",
    },
    s_lms_price: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      defaultValue: 0,
      comment: "건당 LMS 가격",
    },
    s_naver_id: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "네이버 아이디",
    },
    s_naver_business_id: {
      type: DataTypes.INTEGER({ length: 11 }).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "네이버 비지니스 아이디",
    },
  },
  {
    sequelize,
    modelName: "shops",
    tableName: "shops",
    timestamps: false,
    defaultScope: {
      attributes: [
        "s_no",
        "s_id",
        "s_name",
        "s_visit_name",
        "s_address",
        "s_enable",
        "s_type",
        "s_lv",
      ],
    },
  },
);

export default Shops;
