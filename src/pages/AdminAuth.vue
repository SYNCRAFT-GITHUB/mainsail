<template>
    <div class="login-page">
        <div class="login-form" v-if="!isLoggedIn">
                <h2 class="reveal-title"> {{ reveal }}</h2>
            <div class="login-inputs">
                <div class="login-field">
                    <input type="password" id="key" v-model="key" @keyup.enter="login">
                </div>
            </div>
            <div class="login-buttons">
                <button :class="{ 'shake': buttonClick }" @click="login">{{ $t('JobQueue.Start') }}</button>
            </div>
        </div>
        <div v-else-if="isLoggedIn">
            <div class="lock-buttons">
                <button @click="lock">
                    <h1>{{ $t('Router.Lock') }}</h1>
                    <div v-if="timerRunning">{{ timer }}</div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { adminState, correctKey, permaKey, unlockCount, timer } from '../admin.ts';
export default {
    data() {
        return {
            isLoggedIn: adminState.isAdmin,
            key: '',
            buttonClick: false,
            reveal: atob(correctKey.reveal),
            timerRunning: timer.running,
            timerSeconds: timer.seconds,
            timerInterval: timer.interval
        };
    },
    computed: {
        timer() {
            const minutes = Math.floor(this.timerSeconds / 60).toString().padStart(2, '0');
            return `Approximately ${minutes} minute(s) left`;
        },
    },
    methods: {
        login() {
            this.buttonClick = true;
            if ( this.key == correctKey.value ) {
                timer.running = true;
                timer.interval = setInterval(() => {
                timer.seconds--;
                if (timer.seconds <= 0) {
                    clearInterval(timer.seconds);
                    location.reload();
                    adminState.isAdmin = false;
                }
                }, 1000);
                adminState.isAdmin = true;
                unlockCount.value += 1;
                this.key = '';
                this.$router.push('/');
            }
            if ( this.key == atob(permaKey.value) ) {
                adminState.isAdmin = true;
                unlockCount.value += 1;
                this.key = '';
                this.$router.push('/');
            }
            setTimeout(() => {
                this.buttonClick = false;
            }, 300);
        },
        beforeUnmount() {
            clearInterval(timer.interval);
        },
        lock() {
            timer.running = false;
            adminState.isAdmin = false;
            clearInterval(timer.seconds);
            this.$router.push('/');
            location.reload();
        }
    },
};
</script>

<style>
.shake {
    animation: shake 0.5s;
}

@keyframes shake {
    0% {
        transform: translateX(0);
    }

    10%,
    90% {
        transform: translateX(-10px);
    }

    30%,
    70% {
        transform: translateX(10px);
    }

    50% {
        transform: translateX(0);
    }
}

.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 63vh;
    background-color: rgb(33, 33, 33);
    color: rgb(198, 195, 190);
    border-radius: 10px;
}

.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(84, 84, 84);
    padding: 33px;
    border-radius: 7px;
}

.reveal-title {
    background-color: rgb(67, 67, 67);
    color: rgb(198, 195, 190);
    padding: 8px;
    border-radius: 5px;
    cursor: cell;
    font-family: 'Segoe UI', Roboto;
    margin-bottom: 20px;
    text-transform: uppercase;
}

.login-inputs {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.login-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

.login-field label {
    margin-bottom: 5px;
}

.login-field input {
    border: none;
    background-color: rgb(198, 195, 190);
    color: black;
    padding: 10px;
    border-radius: 5px;
}

.login-buttons button {
    border: none;
    background-color: rgb(198, 195, 190);
    color: rgb(18, 17, 17);
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    text-transform: uppercase;
}

.lock-buttons button {
    border: none;
    background-color: rgb(111, 18, 9);
    color: rgb(220, 212, 212);
    padding: 17px;
    border-radius: 12px;
    cursor: pointer;
    text-transform: uppercase;
}
</style>
