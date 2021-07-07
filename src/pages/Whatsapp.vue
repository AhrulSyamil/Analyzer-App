<template>
  <section>
    <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
      <div>
        <h4 class="mb-3 mb-md-0">Welcome to Whatsapp Analyzer</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mb-3">
        <p class="card-description">Start by selecting an exported ".txt" file from your WhatsApp</p>
        <input type="file" ref="dataset" id="dataset" v-on:change="input"/>
      </div>
    </div> <!-- row -->

    <div class="row" id="result" v-if="data.datasource">
      <div class="col-12">
        <h5>Result: </h5>
        <div class="card">
          <div class="card-header">
            <h3 class="text-center mb-3 mt-4">{{ data.datasource.chat_name }}</h3>
            <p class="text-muted text-center mb-4 pb-2">{{ `${toLocaleDate(data.datasource.detail_chat[0].date)} ${data.datasource.detail_chat[0].time} - ${toLocaleDate(data.datasource.detail_chat[data.datasource.detail_chat.length - 1].date)} ${data.datasource.detail_chat[data.datasource.detail_chat.length - 1].time}` }}</p>
          </div>
          <div class="card-body">
            <h6 class="card-title">Detail Chat</h6>
            <div class="table-responsive">
              <table class="table table-bordered datatable" width="100%">  
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Author</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(chat, i) in data.datasource.detail_chat">
                    <td>{{ i + 1 }}</td>
                    <td>{{ chat.date }}</td>
                    <td>{{ chat.time }}</td>
                    <td>{{ chat.author }}</td>
                    <td>{{ chat.message }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-body">
            <h6 class="card-title">Totals</h6>
            <div class="row flex-grow">
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0">Days Total</h6>
                    </div>
                    <h3 class="mb-2">{{ data.datasource.total_chat.total_days }}</h3>
                  </div>
                </div>
              </div>
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0">Messages Total</h6>
                    </div>
                    <h3 class="mb-2">{{ data.datasource.total_chat.messages_total }}</h3>
                  </div>
                </div>
              </div>
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0">Words Total</h6>
                    </div>
                    <h3 class="mb-2">{{ data.datasource.total_chat.words_total }}</h3>
                  </div>
                </div>
              </div>
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0">Letters Total</h6>
                    </div>
                    <h3 class="mb-2">{{ data.datasource.total_chat.letters_total }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h6 class="card-title">Content</h6>
            <div class="row flex-grow">
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0">Media</h6>
                    </div>
                    <h3 class="mb-2">{{ data.datasource.content_chat.media_total }}</h3>
                  </div>
                </div>
              </div>
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0">Emojis</h6>
                    </div>
                    <h3 class="mb-2">{{ data.datasource.content_chat.emoji_total }}</h3>
                  </div>
                </div>
              </div>
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0">Links</h6>
                    </div>
                    <h3 class="mb-2">{{ data.datasource.content_chat.link_total }}</h3>
                  </div>
                </div>
              </div>
              <!--<div class="col-md-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0">Videos</h6>
                    </div>
                    <h3 class="mb-2">{{ data.datasource.content_chat.media_total }}</h3>
                  </div>
                </div>
              </div> -->
              <!-- <div class="col-md-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0">Voice Messages</h6>
                    </div>
                    <h3 class="mb-2">{{ data.datasource.content_chat.media_total }}</h3>
                  </div>
                </div>
              </div> -->
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0">GPS-coordinates</h6>
                    </div>
                    <h3 class="mb-2">{{ data.datasource.content_chat.gps_total }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body" v-if="data.datasource.sentiment_analysis">
            <h6 class="card-title">Sentiment Analysis</h6>
            <div class="row flex-grow">
              <div class="col-md-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0 text-danger">Negative</h6>
                    </div>
                    <h3 class="mb-2">{{ (data.datasource.sentiment_analysis.percentage.negative == '0.0') ? 0 : data.datasource.sentiment_analysis.percentage.negative }} %</h3>
                  </div>
                </div>
              </div>
              <div class="col-md-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0 text-secondary">Neutral</h6>
                    </div>
                    <h3 class="mb-2">{{ (data.datasource.sentiment_analysis.percentage.neutral == '0.0') ? 0 : data.datasource.sentiment_analysis.percentage.neutral }} %</h3>
                  </div>
                </div>
              </div>
              <div class="col-md-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-baseline">
                      <h6 class="card-title mb-0 text-sucess">Positive</h6>
                    </div>
                    <h3 class="mb-2">{{ (data.datasource.sentiment_analysis.percentage.positive == '0.0') ? 0 : data.datasource.sentiment_analysis.percentage.positive }} %</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h6 class="card-title">Timeline</h6>
            <div class="monthly-sales-chart-wrapper">
              <canvas id="monthly-sales-chart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, onMounted, onUpdated, ref, reactive } from 'vue';
import axios from 'axios'
import { 
  Loading,
  QSpinnerTail
} from 'quasar'

export default defineComponent({
  name: 'Whatsapp',

  setup() {

    let file = ref(null)

    let datasource = ref(null)

    let data = reactive({
      file: null,
      datasource: null
    })

    function toLocaleDate(date) {
      const options = {
         weekday: 'long',
         year: 'numeric',
         month: 'long',
         day: 'numeric'
      };

      return new Date(date).toLocaleString('id-ID', options);
    }

    function input() {
      data.file = this.$refs["dataset"].files[0]

      Loading.show({
         spinnerSize: 40,
         spinner: QSpinnerTail
      })

      let formData = new FormData();
      formData.append("whatsapp_file", data.file);

      axios.post('http://localhost:5000/result', formData).then(result => {
        data.datasource = result.data

        let filename = data.file.name.split('.txt')[0]
        data.datasource.chat_name = filename
        
      }).then(() => {
        $('.datatable').DataTable()
        Loading.hide()
      })
    }

    onMounted(() => {
      $('#dataset').dropify()

      // let mrfInput = $(this.$refs.['mrf-input']).dropify()
      // mrfInput.on('dropify.afterClear', (event, element) => {
      //     this.form.mrf = null
      //     this.pdf_viewer_show = false
      // });
    })

    onUpdated(() => {
      if($('#monthly-sales-chart').length) {
        var gridLineColor = 'rgba(77, 138, 240, .1)';

        var colors = {
          primary:         "#727cf5",
          secondary:       "#7987a1",
          success:         "#42b72a",
          info:            "#68afff",
          warning:         "#fbbc06",
          danger:          "#ff3366",
          light:           "#ececec",
          dark:            "#282f3a",
          muted:           "#686868"
        }

        let timeline = [data.datasource.timeline.Monday,data.datasource.timeline.Tuesday,data.datasource.timeline.Wednesday,data.datasource.timeline.Thursday,data.datasource.timeline.Friday,data.datasource.timeline.Saturday,data.datasource.timeline.Sunday]

        let min = Math.min.apply(Math, timeline),
        max = Math.max.apply(Math, timeline);

        var monthlySalesChart = document.getElementById('monthly-sales-chart').getContext('2d');
          new Chart(monthlySalesChart, {
            type: 'bar',
            data: {
              labels: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
              datasets: [{
                label: 'Total Chat',
                data: timeline,
                backgroundColor: colors.primary
              }]
            },
            options: {
              maintainAspectRatio: false,
              legend: {
                display: false,
                  labels: {
                    display: false
                  }
              },
              scales: {
                xAxes: [{
                  display: true,
                  barPercentage: .3,
                  categoryPercentage: .6,
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    fontColor: '#8392a5',
                    fontSize: 10
                  }
                }],
                yAxes: [{
                  gridLines: {
                    color: gridLineColor
                  },
                  ticks: {
                    fontColor: '#8392a5',
                    fontSize: 10,
                    min: min / 2,
                    max: max
                  }
                }]
              }
            }
          }
        );
      }
    })

    return {
      file,
      datasource,
      data,

      input,
      toLocaleDate
    }

  }
})
</script>
