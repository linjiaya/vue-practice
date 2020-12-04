<template>
	<div class="col-xs-offset-4 col-xs-4">
	<!-- <table>
		<tr v-for="(i, index) in Array(n).fill('')" :key="index">
			<td>123</td>
			<td>123</td>
			<td>123</td>
		</tr>
	</table> -->
		<el-upload
		  action="https://jsonplaceholder.typicode.com/posts/"
		  list-type="picture-card"
		  :on-preview="handlePictureCardPreview"
		  :on-remove="handleRemove">
		  <i class="el-icon-plus"></i>
		</el-upload>
		<el-dialog :visible.sync="dialogVisible">
		  <img width="100%" :src="dialogImageUrl" alt="">
		</el-dialog>
	</div>
</template>

<script>
	import Mock from 'mockjs'

	export default {
		name: 'mockEG',
		data () {
			return {
				n: 3,
				dialogImageUrl: '',
        dialogVisible: false,
			}
		},
		mounted () {
			this.getMock()
		},
		methods: {
			getMock () {
				Mock.mock('http://123.com', {
					'name|10': 'fei',
					'age|20-50': 25,
				})
				this.$axios({
					url: 'http://123.com',
					method: 'get'
				}).then((response) => {
					console.log(response.data);
				})
			},
			/*submitUpload () {
				this.$refs.upload.submit();
			},
			handleRemove (file, fileList) {
				console.log(file, fileList);
			},
			handlePreveiew (file) {
				console.log(file);
			}*/
				handleRemove(file, fileList) {
	        console.log(file, fileList);
	      },
	      handlePictureCardPreview(file) {
	        this.dialogImageUrl = file.url;
	        this.dialogVisible = true;
	      }
		}
	}
</script>