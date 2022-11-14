import React from "react";
import Header from "../component/header";
import NavBar from "../component/NavBar";
import styles from "../css/StoreListView.module.css";
import { Link } from 'react-router-dom';
import SampleImg from "../img/sample.PNG";
import locationImg from "../img/location.png"
import starImg from "../img/starone.jpg";

class StoreListView extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className={styles.StoreList}>
                    <div className={styles.TopBar}>
                        <span className="Result">결과건</span>
                        <span className="Dropdown1">
                            <select name="dropFood">
                                <option value="Dessert">디저트</option>
                                <option value="Korean">한식</option>
                                <option value="Japanese">일식</option>
                                <option value="Chinese">중식</option>
                            </select>
                        </span>
                        <span className="Dropdown2">
                            <select name="dropSort">
                                <option value="SortByRecommendation">추천순</option>
                                <option value="SortByReview">리뷰많은 순</option>
                                <option value="SortByPrice">가격 낮은 순</option>
                            </select>
                        </span>
                    </div><br></br>
                    < div className={styles.Restaurant}>
                        <div className={styles.Restaurant1}>
                            <table>
                                <tr>
                                    <th className="ImagePart">
                                        <img className={styles.RestaurantImg} src={SampleImg} alt="restaurant1_img" />
                                    </th>
                                    <th>
                                        <p className={styles.StoreName}>음식점 이름</p>
                                        {/*store 데이터 가져와서 바꿀 것*/}
                                        <img className={styles.LocationImage} src={locationImg} alt="locationImg" />
                                        <span>음식점 주소</span>
                                        {/* store 데이터 가져와서 수정*/}
                                        <p className="Tag">태그</p>
                                        {/*store 데이터 가져와서 수정*/}
                                        <img src="" alt="좋아요 수" />
                                        <span>280</span><br></br>
                                        {/*<Heart></Heart> */}
                                        <img className={styles.StarImage} src={starImg} alt="평점" />
                                        <span>3.8</span>
                                        {/*<StoreScore></StoreScore> */}
                                        <span>리뷰""개</span>
                                    </th>
                                </tr>
                            </table>

                        </div>
                        <div className={styles.Restaurant2}>
                            <table>
                                <tr>
                                    <th>
                                        <img className={styles.RestaurantImg} src={SampleImg} alt="restaurant2_img" />
                                    </th>
                                    <th>
                                        <p className={styles.StoreName}>음식점 이름</p>
                                        {/*store 데이터 가져와서 바꿀 것*/}
                                        <img className={styles.LocationImage} src={locationImg} alt="locationImg" />
                                        <span>음식점 주소</span>
                                        {/* store 데이터 가져와서 수정*/}
                                        <div className="Tag">태그</div>
                                        {/*store 데이터 가져와서 수정*/}
                                        <img src="" alt="좋아요 수" />
                                        <span>280</span><br></br>
                                        {/*<Heart></Heart> */}
                                        <img className={styles.StarImage} src={starImg} alt="평점" />
                                        {/*<StoreScore></StoreScore> */}
                                        <span>3.8</span>
                                        <span>리뷰""개</span>
                                    </th>
                                </tr>
                            </table>

                        </div>
                        <div className={styles.Restaurant3}>
                            <table>
                                <tr>
                                    <th>
                                        <img className={styles.RestaurantImg} src={SampleImg} alt="restaurant3_img" />
                                    </th>
                                    <th>
                                        <p className={styles.StoreName}>음식점 이름</p>
                                        {/*store 데이터 가져와서 바꿀 것*/}
                                        <img className={styles.LocationImage} src={locationImg} alt="locationImg" />
                                        <span>음식점 주소</span><br></br>
                                        {/* store 데이터 가져와서 수정*/}
                                        <span className="Tag">태그</span>
                                        {/*store 데이터 가져와서 수정*/}
                                        <img src="" alt="좋아요 수" />
                                        <span>280</span><br></br>
                                        {/*<Heart></Heart> */}
                                        <img className={styles.StarImage} src={starImg} alt="평점" />
                                        <span>3.8</span>
                                        {/*<StoreScore></StoreScore> */}
                                        <span>리뷰""개</span>
                                    </th>
                                </tr>
                            </table>

                        </div>

                        <div className={styles.StoreMap}>
                            {/*지도 API 추가할 부분*/}
                        </div>
                        <button type="button" name="next_button"></button>
                        {/*음식점 목록과 지도 API 사이에 있는 버튼*/}

                    </div>
                </div>
            </div>

        )
    }
}
export default StoreListView;