const generateTeam = (team) => {
    console.log(team);
    // Creates an empty array to push html elements into and loop through team data
    const html = [];
    // Creates functions for each employee type that returns html data
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
        `;
        html.push(managerHtml);
    }
}