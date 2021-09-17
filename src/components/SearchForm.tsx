import { useState } from "react";


export default function SearchForm({onSubmit}: {onSubmit: (query: string) => void}){
    const [searchQuery, setSearchQuery] = useState("");

    return (
			<div className="SearchForm">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						onSubmit(searchQuery);
						setSearchQuery("");
					}}
				>
					<label>
						<span className="material-icons-outlined">search</span>
					</label>
					<input
						value={searchQuery}
						onChange={(e) => {
							setSearchQuery(e.target.value);
						}}
					/>
					<button>Search</button>
				</form>
			</div>
		);
}