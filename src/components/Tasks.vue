<template>
    <q-page-container>
      <q-page class="column items-center justify-center q-pa-md">
        <div class="tasks-section">
          <q-select
            v-model="selectedTask"
            :options="tasks"
            label="Select Task"
            emit-value
            map-options
            filled
            class="task-select"
          />
          <q-btn @click="navigateToTask" round flat icon="play_circle" size="lg" color="primary" />
        </div>
      </q-page>
    </q-page-container>
</template>

<script setup>
import { ref } from "vue";
import { QLayout, QHeader, QToolbar, QToolbarTitle, QPageContainer, QFooter, QPage, QSelect, QBtn } from "quasar";

const tasks = ref([
  { label: "Tugas 1", value: "https://putri-223510788.netlify.app/" },
  { label: "Tugas 2", value: "https://putri-223510788-pbktugas2.netlify.app/" },
  { label: "Tugas 3", value: "https://putrisundari223510788pbkt3.netlify.app/" },
  { label: "Tugas 4", value: "https://putri-223510788-pbktugas4.netlify.app/" },
  { label: "Tugas 5", value: "https://github.com/putrisundari/puts-223510788-pbkTugas5" },
  { label: "Tugas 6", value: "https://puts-223510788-pbktugas6.netlify.app/" },
]);

const selectedTask = ref(null);

const navigateToTask = () => {
  if (selectedTask.value) {
    window.location.href = selectedTask.value;
  }
};
</script>

<style scoped>
.tasks-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
  align-items: center;
  background: linear-gradient(135deg, #e1bee7, #ce93d8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.tasks-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.task-select {
  width: 300px;
}

.q-btn {
  margin-top: 12px;
  background: linear-gradient(135deg, #8e24aa, #7b1fa2);
  color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.q-btn:hover {
  background: linear-gradient(135deg, #7b1fa2, #6a1b9a);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>
