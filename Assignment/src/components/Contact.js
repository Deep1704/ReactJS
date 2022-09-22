export default function Contact(){
    return (<>
        <h1>contact page</h1>
        <div class="modal fade" id="contact" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg modal-dialog-centered mymodal_design">
			<div class="modal-content">
				<div class="modal-header border-bottom-0">
					<h5 class="modal-title" id="exampleModalLabel"></h5>
					<button type="button" class="myclose-btn"  data-bs-dismiss="modal" aria-label="Close">
						<i class="fas fa-times-circle"></i>
					</button>
				</div>
				<div class="modal-body">
					<p class="modal-title-body">Contact Us</p>
					<p class="body-text">Lorem ipsum dolor site amet, consectetur adipiscing elit. Aliquam interdum, nisl sed faucibus tempor, massa velit laoreet ipsum, et faucibus sapien magna at enim. Suspendisse a dictum tortor, vel rhoncus libero.</p>

					<form class="contact">
						<div class="row g-4 mt-3">
							<div class="col-lg col-md col-sm-12">
								<input type="text" placeholder="Name" required="required"/>
							</div>
							<div class="col-lg col-md col-sm-12">
								<input type="email" placeholder="Email" required="required"/>
							</div>
							<div class="col-12">
								<textarea placeholder="Message" required="required"></textarea>
							</div>
							<div class="col-12">
								<button type="submit"  class="btn btn-lg rounded-0 submit">SUBMIT</button>
							</div>
						</div>
					</form>
				</div>
				
			</div>
		</div>
	</div>
    </>)
}