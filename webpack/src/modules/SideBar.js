
class SideBar {
	constructor() {
		
	}
	static render() {
		require("./side/style.css");
		return `
			<ul class="gnavi">
				<li><a href="/">ホーム</a></li>
				<li><a href="/about">キイロイトリについて</a></li>
				<li><a href="/album">アルバム</a></li>
				<li><a href="/goods">グッズ</a></li>
			</ul>`;
	}
}

module.exports = SideBar;
