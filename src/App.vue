<template>
    <div id="app">
        <div class="row">
            <div class="col-xs-12 text-center">
                <h1>Built-in Directives</h1>
                <p v-text="'Some <b>escaped</b> text here'"></p>
                <p v-html="'Some <b>unescaped</b> text here'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 text-center">
                <h1>Custom Directives</h1>

                <p>
                    Some <span v-highlight>Highlighted</span> text with default background color
                </p>

                <p>
                    Some <span v-highlight:background="'#dab5ff'">Highlighted</span> text with custom background color
                </p>

                <p>
                    Some <span v-highlight.upper>Highlighted</span> text with default background color and upper
                    modifier
                </p>

                <p>
                    Some <span v-highlight:background.upper="'#99ddff'">Highlighted</span> text with custom background
                    color and upper modifier
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
</style>
