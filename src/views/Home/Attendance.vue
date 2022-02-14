<template>
  <div>
    <header>
      <h2>ENG45</h2>
    </header>
    <div class="table-wrapper" ref="wrapper">
      <table ref="table" class="table">
        <!-- <colgroup>
                    <col span="1" class="students">
                </colgroup> -->
        <tr id="header" class="header">
          <th ref="empty" class="empty name"></th>
          <th>
            <span>2/4/2022</span>
          </th>
          <th>
            <span>2/5/2022</span>
          </th>
        </tr>
        <tr
          v-for="student in students"
          :key="student.uuid"
          class="cell student"
        >
          <th class="name">{{ student.name }}</th>
          <td
            v-for="date in student.dates"
            :key="date.date"
            :class="{ present: date.present }"
          ></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Attendance",
  data() {
    return {
      students: [
        {
          name: "Logan Reuter",
          uuid: 1,
          dates: [
            {
              date: "2/5/2022",
              present: true,
            },
          ],
        },
        {
          name: "Nicole Chen",
          uuid: 2,
          dates: [
            {
              date: "2/5/2022",
              present: false,
            },
          ],
        },
        {
          name: "Rowan Glenn",
          uuid: 3,
          dates: [
            {
              date: "2/5/2022",
              present: true,
            },
          ],
        },
        {
          name: "Julie Nguyen",
          uuid: 4,
          dates: [
            {
              date: "2/5/2022",
              present: false,
            },
          ],
        },
        {
          name: "Freesia Finn",
          uuid: 5,
          dates: [
            {
              date: "2/5/2022",
              present: true,
            },
          ],
        },
        {
          name: "Jess Lee",
          uuid: 6,
          dates: [
            {
              date: "2/5/2022",
              present: true,
            },
          ],
        },
        {
          name: "Tichada Tantasirikorn",
          uuid: 7,
          dates: [
            {
              date: "2/5/2022",
              present: true,
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.$refs.wrapper.scrollLeft = this.$refs.table.scrollWidth;
  },
};
</script>

<style lang="scss" scoped>
header {
  min-width: 0;
  flex: 1 1 auto;
  padding: 0.5rem 6rem;
  text-align: start;
  border-bottom: 1px solid #ccc;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: var(--off-white);
  // border-left: 1px solid #000;
  // border-top: 1px solid #000;
  // border-right: 1px solid #000;

  &:horizontal {
    // border-bottom: 1px solid #000;
    border-right: none;
  }
}

::-webkit-scrollbar-corner {
  background-color: var(--off-white);
}

::-webkit-scrollbar-thumb {
  border-radius: 2rem;
  background-color: #ccc;
  cursor: pointer;
}

table,
th,
td {
  // border: 1px solid black;
  border-collapse: separate;
  border-spacing: 0;
  white-space: nowrap;
}

.table-wrapper {
  padding: 0;
  margin: 0;
  // width: 200px;
  // height: 150px;
  min-width: 0;
  min-height: 0;
  flex: 1 1 auto;
  overflow: auto;
}

.table {
  position: relative;
  table-layout: fixed;
  margin: 0 auto;

  th {
    vertical-align: bottom;
    text-align: center;
    padding: 5px 5px 0 5px;
    background-color: #fff;
    position: sticky;
    top: 0;
    left: 0;
    border: 1px solid #000;
    z-index: 1;

    span {
      -ms-writing-mode: tb-rl;
      -webkit-writing-mode: vertical-rl;
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      white-space: nowrap;
    }

    &.empty {
      z-index: 2;
    }
  }

  tr {
    position: relative;
  }

  td {
    width: fit-content;
    padding: 5px;
    border: 1px solid #000;

    &.present {
      background-color: #005a00;
    }
  }
}
</style>
