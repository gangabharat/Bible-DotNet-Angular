﻿using Bible.Application.Common.Interfaces;
using Bible.Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Bible.Application.TodoLists.Commands.CreateTodoList
{
    public class CreateTodoListCommand : IRequest<int>
    {
        public string Title { get; set; }
    }

    public class CreateTodoListCommandHandler : IRequestHandler<CreateTodoListCommand, int>
    {
        private readonly IApplicationDbContext _context;

        public CreateTodoListCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateTodoListCommand request, CancellationToken cancellationToken)
        {
            var entity = new TodoList();

            entity.Title = request.Title;

            _context.TodoLists.Add(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return entity.Id;
        }
    }
}