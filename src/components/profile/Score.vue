<template>
    <section id="score">

        <div class="container">

            <ProfileNavbar />
            <router-view />

            <!-- Drop Down -->
            <!-- https://getbootstrap.com/docs/5.3/components/dropdowns/#menu-alignment -->

            <div class="btn-group mt-4 float-end" id="myDropDownBtn">
                <button type="button" class="btn dropdown-toggle text-center border-0" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Digital future skills training
                </button>
                <ul class="dropdown-menu dropdown-menu-start">
                    <li>
                        <a class="btn dropdown-item text-center">Digital future skills training</a>
                    </li>
                    <li>
                        <a class="btn dropdown-item text-center">Robot competition training</a>
                    </li>
                    <li>
                        <a class="btn dropdown-item text-center">Steam applications and virtual labs</a>
                    </li>
                </ul>
            </div>

            <!-- Accordion -->

            <div id="myAccordion">

                <!-- accordion-flush -->
                <div class="accordion" id="accordionExample">

                    <div class="accordion-item border-0">

                        <div id="myHeading">

                            <h5 class="accordion-header">
                                <button class="accordion-button" type="button">
                                    <table class="table mb-0">
                                        <thead>
                                            <tr>
                                                <th style="border-radius: 8px 0px 0px 0px !important;">Phase</th>
                                                <th>Total time</th>
                                                <th style="border-radius: 0px 8px 0px 0px !important;">Points</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </button>
                            </h5>

                        </div>

                    </div>

                    <div class="accordion-item border-0">

                        <h5 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <table class="table mb-0">
                                    <tbody>
                                        <tr>
                                            <td>Phase 1 (Beginner)</td>
                                            <td>10.25.30</td>
                                            <td>400</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </button>
                        </h5>

                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">

                                <table class="table mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col" style="border-radius: 8px 0px 0px 0px;">Level</th>
                                            <th scope="col">Tries number</th>
                                            <th scope="col">Time</th>
                                            <th scope="col" style="border-radius: 0px 8px 0px 0px;">Stars</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>1</td>
                                            <td>15 mins</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>2</td>
                                            <td>15 mins</td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>1</td>
                                            <td>15 mins</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>2</td>
                                            <td>15 mins</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>2</td>
                                            <td>15 mins</td>
                                            <td>1</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>

                    </div>

                    <div class="accordion-item border-0">

                        <h5 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <table class="table mb-0">
                                    <tbody>
                                        <tr>
                                            <td>Phase 2 (Intermediate)</td>
                                            <td>13.25.56</td>
                                            <td>250</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </button>
                        </h5>

                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">

                            </div>
                        </div>

                    </div>

                    <div class="accordion-item border-0">

                        <h5 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <table class="table mb-0">
                                    <tbody>
                                        <tr>
                                            <td>Phase 3 (Advanced)</td>
                                            <td>5.20.20</td>
                                            <td>200</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </button>
                        </h5>

                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<script>
import ProfileNavbar from '@/components/profile/ProfileNavbar.vue';
export default {
    name: 'Score',
    components: {
        ProfileNavbar,
    },
}
</script>

<style lang="scss" scoped>
#score {

    margin-top: 64px;
    padding-top: 40px;
    padding-bottom: 40px;
    background: $my-gradient;
    min-height: 100vh;

    #myDropDownBtn {

        button {
            // width: 247px;
            width: 279px;
            padding: 8px 16px;
            background: $linear-pink;
            border-radius: 4px;
            color: $white;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
        }

        .dropdown-toggle::after {
            vertical-align: middle;
        }

        .dropdown-menu {

            background: $mov;
            border-radius: 4px;

            /* li:not(:last-child) {
                box-shadow: 0px 4px 4px 0px $box-shadow;
            } */

            a {
                color: $white;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
            }

            a:hover {
                background: $mov;
                color: $orange;
            }

        }

    }

    // Accordion

    #myAccordion {

        margin-top: 85px;

        .accordion {

            --bs-accordion-bg: transparent;

            .accordion-item {
                // border-radius: 8px 8px 0px 0px;
                border-radius: 8px;

                #myHeading {

                    .accordion-header {

                        border-bottom: 1px solid $notification-border;

                        .accordion-button {

                            background: $dark-mov;
                            border-radius: 8px 8px 0px 0px;
                            cursor: default;

                            table {
                                thead {
                                    tr {
                                        height: 40px;

                                        th {
                                            background: $dark-mov;
                                            border: 0;
                                            color: $white;
                                            font-size: 16px;
                                            font-style: normal;
                                            font-weight: 400;
                                            line-height: 24px;
                                            width: 180px;
                                        }
                                    }
                                }
                            }

                        }

                        .accordion-button::after {
                            visibility: hidden;
                        }
                    }

                }

                .accordion-header {

                    border-bottom: 1px solid $pink;


                    .accordion-button {

                        background-color: transparent;
                        box-shadow: none;
                        padding-top: 0;
                        padding-bottom: 0;
                        padding-left: 0;

                        table {
                            tbody {
                                tr {
                                    height: 40px;
                                }

                                td {
                                    background-color: transparent;
                                    border: 0;
                                    color: $white;
                                    font-size: 16px;
                                    font-style: normal;
                                    font-weight: 400;
                                    line-height: 24px;
                                    width: 180px;
                                }
                            }
                        }
                    }

                    .accordion-button::after {
                        // background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e") center/16px no-repeat;
                        // https://www.base64-image.de/
                        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE2SURBVHgB7VOxSgNRENzZd4JlakXFP/AX/ANtLRQrS5M2CDESEAQx2Iv5hHyKn5CAWqdO7u067+J1Pi+2cnMct3fLm9mZ5URatGiBXOPzanhtW34rah0Ecw8GCe4STDw4pHBxNRH1hcOGB/3x+CcezQmQZSAlOhJVPCoQ1VkjvSPC2ZNUi6ED10GOpsgKlIAqR/aINAdnBzyBrj1dLNzku7fI0WQduOGS3GliTqtSO1k7WN+VgxXdLK33Z4HdSX/KOYdIpIyjIk3Pkq6qbypaUtyLu/3R4zTHk11yjY/z+wkXfZGWi0BjgZEFHtTI2p/3nkbd385rk8BSt7swvCEGqRZbVktOcc2byDcSOJz0FlCcMu9ZnT+FZquIY9kAjRHVeD97OGIsr/wXBIWd7LzczKVFi/+BL48HjbHy4zQIAAAAAElFTkSuQmCC') center/24px no-repeat;
                    }
                }

                .accordion-collapse {

                    // border-bottom: 1px solid $pink;

                    .accordion-body{

                        // background: $mov;

                        table{

                            thead{

                                tr{

                                    border-bottom: 1px solid $notification-border;

                                    th,
                                    td{
                                        background: $black;
                                        border: 0;
                                        color: $white;
                                        font-size: 16px;
                                        font-style: normal;
                                        font-weight: 400;
                                        line-height: 24px;
                                        width: 180px;
                                    }

                                }

                            }

                            tbody{

                                tr{

                                    border-bottom: 1px solid $pink;

                                    th,
                                    td {
                                        background-color: transparent;
                                        border: 0;
                                        color: $white;
                                        font-size: 16px;
                                        font-style: normal;
                                        font-weight: 400;
                                        line-height: 24px;
                                        width: 180px;
                                    }

                                }

                            }

                        }

                    }

                }

                /* .accordion-collapse {

                    .accordion-body {

                        table {

                            tbody {
                                tr {
                                    

                                    th,
                                    td {
                                        
                                    }
                                }
                            }
                        }

                    }

                } */

            }

        }

    }

}
</style>