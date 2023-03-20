<template>
  <v-card elevation="0" class="d-flex align-center justify-space-between">
    <v-card-text>
      <v-autocomplete
          label="Место"
          outlined
          class="elevation-0"
          hide-details
          :items="['Бишкек', 'Нарын', 'Ыссык-Кол', 'Ош', 'Талас', 'Жалал-Абад', 'Баткен']"
      >
      </v-autocomplete>
      <hr class="my-5"/>
      <div>
        <div class="d-flex justify-space-around">
          <div class="d-flex">
            <div class="d-flex align-center">
              <svg class="mr-1" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_495_5386)">
                  <rect x="0.483379" y="0.483379" width="29.9695" height="29.9695" rx="14.9848" fill="#FCFCFD" stroke="#E6E8EC" stroke-width="0.966759"/>
                  <path d="M8 21.3333V14.6667C8 14.2246 8.17559 13.8007 8.48816 13.4882C8.80072 13.1756 9.22464 13 9.66667 13H21.3333C21.7754 13 22.1993 13.1756 22.5118 13.4882C22.8244 13.8007 23 14.2246 23 14.6667V21.3333" stroke="#6A717F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.66669 13V9.66667C9.66669 9.22464 9.84228 8.80072 10.1548 8.48816C10.4674 8.17559 10.8913 8 11.3334 8H19.6667C20.1087 8 20.5326 8.17559 20.8452 8.48816C21.1578 8.80072 21.3334 9.22464 21.3334 9.66667V13" stroke="#6A717F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 19.6666H23" stroke="#6A717F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_495_5386">
                    <rect width="30.9363" height="30.9363" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              Койка-место
            </div>
          </div>
          <svg width="1" height="41" viewBox="0 0 1 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.322388" y="40.0067" width="40" height="1" rx="0.5" transform="rotate(-90.4618 0.322388 40.0067)" fill="#D1D3D7"/>
          </svg>

          <div class="d-flex">
            <div class="d-flex align-center">
              <svg class="mr-1" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_495_5397)">
                  <rect x="0.5471" y="0.483379" width="29.9695" height="29.9695" rx="14.9848" fill="#FCFCFD" stroke="#E6E8EC" stroke-width="0.966759"/>
                  <path d="M8 21V15C8 14.6022 8.15804 14.2206 8.43934 13.9393C8.72064 13.658 9.10218 13.5 9.5 13.5H21.5C21.8978 13.5 22.2794 13.658 22.5607 13.9393C22.842 14.2206 23 14.6022 23 15V21" stroke="#6A717F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.5 13.5V10.5C9.5 10.1022 9.65804 9.72064 9.93934 9.43934C10.2206 9.15804 10.6022 9 11 9H20C20.3978 9 20.7794 9.15804 21.0607 9.43934C21.342 9.72064 21.5 10.1022 21.5 10.5V13.5" stroke="#6A717F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.5 9V13.5" stroke="#6A717F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 19.5H23" stroke="#6A717F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_495_5397">
                    <rect width="30.9363" height="30.9363" fill="white" transform="translate(0.0637207)"/>
                  </clipPath>
                </defs>
              </svg>
              Комната
            </div>
          </div>
          <svg width="1" height="41" viewBox="0 0 1 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.322388" y="40.0067" width="40" height="1" rx="0.5" transform="rotate(-90.4618 0.322388 40.0067)" fill="#D1D3D7"/>
          </svg>

          <div class="d-flex">
            <div class="d-flex align-center">
              <svg class="mr-1" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_495_5393)">
                  <rect x="0.483379" y="0.483379" width="29.9695" height="29.9695" rx="14.9848" fill="#FCFCFD" stroke="#E6E8EC" stroke-width="0.966759"/>
                  <path d="M8 11.8333L15.5 6L23 11.8333V21C23 21.442 22.8244 21.8659 22.5118 22.1785C22.1993 22.4911 21.7754 22.6667 21.3333 22.6667H9.66667C9.22464 22.6667 8.80072 22.4911 8.48816 22.1785C8.17559 21.8659 8 21.442 8 21V11.8333Z" stroke="#6A717F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13 22.6667V14.3334H18V22.6667" stroke="#6A717F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_495_5393">
                    <rect width="30.9363" height="30.9363" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              Дом
            </div>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "SelectPlace",
  data: () => ({
    items: ['foo', 'bar', 'fizz', 'buzz'],
    values: 'foo',
    value: null,
  }),
}
</script>

<style scoped>

</style>
