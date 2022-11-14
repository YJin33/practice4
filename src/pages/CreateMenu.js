import React from "react";
import styles from "../css/CreateMenu.module.css";
import { Link } from 'react-router-dom'; 

function CreateMenu(){
    return (
        <body>
            <aside>
                <div class = "asideleft">
                <Link to = "/CreateStore" class={styles.up}>기본정보</Link>
                <Link to = "/CreateMenu" class={styles.down}>메뉴</Link>
                </div>
            </aside>
            <section>
              <form method="post" enctype="multipart/form-data">
                <div id = "table">
                    <div class = "row">
                    <span class = "cell col1"></span>
                    <span class = "cell col2">
                    <table>
                  <tr>
                    <th>메뉴명</th>
                    <td><input type ="text" name = "menuname"/></td>
                  </tr>
                  <tr>
                    <th>가격</th>
                    <td><input type ="text" name = "price"/></td>
                  </tr>
                  <tr>
                    <th rowspan = "2">영양성분</th>
                    <td><input type ="text" name = "nutrient" value = "+" size = "70"/></td>
                  </tr>
                  <tr>
                    <td>-계란</td>
                    </tr>
                  <tr>
                    <th>대표사진</th>
                    <td><input type="file" name="file" accept="image/*" /></td>
                  </tr>
                  <tr>
                    <td><input type = 'submit' value ="메뉴 정보 등록"/></td>
                    </tr>
                  </table>
                        </span>
                    </div>
                    <div class = "row">
                    <span class = "cell col1"></span>
                    <input class = "cell col2" type="button">+ 메뉴 새로 추가하기</input>
                    </div>
                </div>
              </form>
            </section>
        </body>
    )
}

export default CreateMenu;