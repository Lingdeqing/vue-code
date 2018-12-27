<template>
    <div>
        <p>
            <input type="checkbox" v-model="checked" true-value="shit" false-value="ohoh">
            <label>{{checked}}</label>
        </p>
        <p>
            <input type="checkbox" v-model="checked1">
            <label>{{checked1}}</label>
        </p>
        <p>
            <input type="checkbox" v-model="checked2" value="shit">
            <label>{{checked2}}</label>
        </p>
        <p>
            <label><input type="checkbox" v-model="checkedNames" value="jack">jack</label>
            <label><input type="checkbox" v-model="checkedNames" value="mario">mario</label>
            <label><input type="checkbox" v-model="checkedNames" value="halen">halen</label>
        </p>
        <p>
            {{checkedNames}}
        </p>
        <p>
            <label><input type="radio" v-model="picked" value="jack">jack</label>
            <label><input type="radio" v-model="picked" value="mario">mario</label>
            <label><input type="radio" v-model="picked" value="halen">halen</label>
        </p>
        <p>
            <label><input type="radio" v-model="picked2" :value="picked2Value">picked2: {{picked2}}</label>
        </p>
        <p>
            <select v-model="selected" multiple>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
        </p>
        <p>
            {{selected}}
        </p>
        <p>
            <select v-model="selected2" >
                <option value="A">A</option>
                <option :value="{i: {am: 'obj'}}">B</option>
                <option value="C">C</option>
            </select>
        </p>
        <p>
            {{selected2}}
        </p>

        <p>
            <input v-model.lazy="lazyMsg" >
            {{lazyMsg}}
        </p>
        <p>
            <input v-model.number="number" type="number">
            {{number}}
        </p>
        <p>
            <input v-model.trim="trim">
            {{trim}}
        </p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            checked1: true,
            checked2: [],
            checked: 'shit',
            checkedNames: [],
            picked: '',
            picked2: '',
            picked2Value: {
                obj: 'haha'
            },
            selected: [],
            selected2: [],
            lazyMsg: '',
            number: 454,
            trim: '54545'
        }
    },
    created(){
        window.vm = this;
    }
}

function maxDepth(root){
    if(root){
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    } 
    return 0;
}
</script>

